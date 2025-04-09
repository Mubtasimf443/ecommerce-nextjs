/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import express, { Request, Response } from 'express';
import { cors } from '../config/Cors';
import { catchError } from '../lib/core/CatchError';
import crypto from "crypto"
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import User from '../models/User';
import { cookieUserSchema, signInSchema, SignUpOtpVerificationSchema, signUpSchema, } from '../lib/Schema/auth';
import { comparePasswords, GenerateOtp, generateSalt, giveAuthSessionId, hashPassword } from '../lib/core/auth';
import { RedisClient } from '../config/redis';
import { authEmails } from '../lib/mails/auth.mails';
import CookieParser from "cookie-parser";
import IsLoggedIn from '../lib/core/IsLoggedIn';
import { NewUser } from '../lib/interfaces/auth';

const router: express.Router = express.Router()
router.use(cors)
router.use(CookieParser())
router.use(express.json())


router.post('/sign-up', async function (req: Request, res: Response): Promise<any | undefined> {
    try {
        // APi must check User Is Logged In Or Not
        let IsUserLoggedIn=await IsLoggedIn(req);
        if (IsUserLoggedIn) {
            return res.sendStatus(204);
        }
        
        let { data, error, success } = signUpSchema.safeParse(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.errors[0].message,
                data: null,
            })
        }
        if (success && data) {
            let user = await User.findOne({ email: data.email });

            if (user !== null) {
                return res.sendStatus(204)
            } 

            let salt = generateSalt();
            let hashedPassword = await hashPassword(data.password, salt);

            
            let verification_otp: number = GenerateOtp();
            let opt_verification_session = crypto.randomBytes(54).toString("hex").normalize();
            
            let newUser: NewUser = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: hashedPassword,
                passwordSalt: salt,
                isVarified: false,
                isRegistered: false,
                shipping_address: {
                    division: data.division,
                    district: data.district,
                    city: data.city,
                    upazila: data.upazila,
                },
                verification_otp,
                expiration : 600,
                phoneDetails : {
                    countryName : data.phoneDetails.countryName,
                    phoneNumber : data.phoneDetails.phoneNumber ,
                    phoneCode : data.phoneDetails.phoneCode
                },
                opt_verification_session : opt_verification_session
            }
            let website_auth_sign_up_verification_session: string = giveAuthSessionId()

            let isEmailSend: boolean = await authEmails.signUpOtpVerificationEmail(verification_otp, data.email);

           

            if (isEmailSend === false) {
                return res.status(500).json({
                    success: false,
                    message: 'Internal server error , Failed to send email',
                    data: null,
                })
            }

            let rasult = await RedisClient.set(
                `session:website_auth_sign_up_verification_session:${website_auth_sign_up_verification_session}`,
                JSON.stringify(newUser), "EX", 600
            );

           

            if (rasult !== 'OK') {
                return res.status(500).json({
                    success: false,
                    message: 'Internal server error . Redis Error',
                    data: null,
                });
            }

            // Our Planing Is when Use sign up We are going give him 2 cookies 
            // a cookies for redis auth session
            // a cookie for Otp verification
            res.statusCode = 201;
            res.cookie("website_auth_sign_up_verification_session", website_auth_sign_up_verification_session, {
                secure: true,
                httpOnly: true,
                sameSite: false,
                expires: new Date(Date.now() + 600 * 1000)
            });
            res.cookie("opt_verification_session", opt_verification_session, {
                secure: true,
                httpOnly: true,
                sameSite: false,
                expires: new Date(Date.now() + 63 * 1000)
                // Email can take 3 seconds to be send 
                // so I am making this session 63 expired
            });
            res.end(JSON.stringify({ success: true , data : null , message : "OK" }));

         

            return;
        }
    } catch (error) {
        catchError(error, res)
    }
})


router.post("/sign-up/verification", async function (req: Request, res: Response): Promise<any> {
    try {
    
        let { success, data, error } = SignUpOtpVerificationSchema.safeParse({
            otp: req.body.otp,
            session: req.cookies.website_auth_sign_up_verification_session ,
            opt_verification_session : req.cookies.opt_verification_session
        });

        if (success == false || data === undefined) {
            return res.status(400).json({
                success: false,
                message: error?.errors[0]?.message || "Invalid data",
                data: null
            })
        }
      


        let userData: string | NewUser | null = await RedisClient.get(`session:website_auth_sign_up_verification_session:${data.session}`)
        if (userData == null) {
            return res.status(400).json({
                success: false,
                message: "Please Create A Account Again",
                data: null
            })
        }


        userData = (function (): NewUser { return JSON.parse(userData) })();

        // First Check The Otp 
        if (userData.verification_otp !== data.otp) {
            return res.status(400).json({
                success: false,
                message: "Incorrect Otp",
                data: null
            })
        }

        // Second Check The Otp session matches or not
        if (userData.opt_verification_session !== data.opt_verification_session) {
            console.error("OTP session does not match");
            return res.status(400).json({
                success: false,
                message: "Please Try After some times to create account",
                data: null
            });
        }


        userData.isVarified = true;

        let exitstingUser = await User.findOne({ email: userData.email })

        if (exitstingUser !== null) {
            return res.status(400).json({
                success: false,
                message: "Your Account Already is Verified",
                data: null
            })
        }

        let user = await User.create(userData)
        if (user == null) {
            return res.status(500).json({
                success: false,
                message: "Database error , Failed to create user",
                data: null
            })
        }


        await authEmails.signUpSuccessfulEmail(userData.email, userData.firstName)

        await RedisClient.del(`session:website_auth_sign_up_verification_session:${data.session}`);

        let website_auth_session = giveAuthSessionId()
        let RedisMessage = await RedisClient.set(
            `session:website_auth_session:${website_auth_session}`,
            JSON.stringify({
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
            }),
            "EX",
            60 * 60 * 24 * 30
        )
        if (RedisMessage !== 'OK') {       
            console.error("Opt Verification error : Can not set cookie in redis");
        }
        res.statusCode = 200;
        res.cookie("website_auth_session", website_auth_session, {
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            secure: false,
            httpOnly: true,
            sameSite: false,
        });
        res.end(JSON.stringify({ success: true, message :"OK" , data : null}))
        return;

    } catch (error) {
        catchError(error, res)
    }
})


router.post("/sign-up/resend-verification-code", async function (req: Request, res: Response): Promise<any> {
    try {
        let session = req.cookies.website_auth_sign_up_verification_session;
        
        if (!session) {
            console.error("Resend Opt : Auth session expired");

            res.status(400).json({
                success: false,
                message: "Unknown Error , Please Create Account After Some Times",
                data: null
            })
            return;
        }

     

        let userData: NewUser |string | null = await RedisClient.get(`session:website_auth_sign_up_verification_session:${session}`)
        if (!userData) {
            res.status(400).json({
                success: false,
                message: "Unknown Error , Please Create Account After Some Times",
                data: null
            });
            return;
        }

        userData = (function (): NewUser { return JSON.parse(userData) })();
        let otp = GenerateOtp()
        userData.verification_otp = otp;
        userData.expiration -= 60;
        userData.opt_verification_session = crypto.randomBytes(54).toString("hex").normalize();
        if (userData.expiration < 60) {
            await RedisClient.del(`session:website_auth_sign_up_verification_session:${session}`)
            res.status(400).json({
                success: false,
                message: "You Are Restricted to Create This Account",
                data: null
            });

            return;
        }
        let isEmailSend: boolean = await authEmails.signUpOtpVerificationEmail(otp, userData.email);
        if (!isEmailSend) {
            console.error('Resend Opt : Failed To send Otp by email');
            res.status(500).json({
                success: false,
                message: "Unknown server error",
                data: null
            });
            return;
        }
        let redisResponse = await RedisClient.set(`session:website_auth_sign_up_verification_session:${session}`, JSON.stringify(userData), "EX", userData.expiration);
        if (redisResponse !== "OK") {
            console.error('Resend Opt : Redis Set Session Failed');
            res.status(500).json({
                success: false,
                message: "Unknown server error",
                data: null
            });
            return;
        }
        res.statusCode = 200;
        res.cookie("opt_verification_session",userData.opt_verification_session , {
            expires: new Date(Date.now() + 65 * 1000),
            secure: false,
            httpOnly: true,
            sameSite: false,
        });
        res.end(JSON.stringify({
            success: true,
            message: "OK",
            data: null
        }));
      
        return;
    } catch (error) {
        catchError(error, res)
    }
})


router.post("/sign-in", async function (req: Request, res: Response): Promise<any> {
    try {

        let IsUserLoggedIn = await IsLoggedIn(req);
        if (IsUserLoggedIn) {
            return res.sendStatus(204);
        }

        let { success, data, error } = signInSchema.safeParse(req.body)
        if (!success || !data) {
            return res.status(400).json({
                success: false,
                message: error?.errors[0]?.message || "validation error",
                data: null
            })
        }

        let user = await User.findOne().where("email").equals(data.email)

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Could not Find Account",
                data: null
            })
        }

        let PasswordMatch = await comparePasswords({
            password: data.password,
            salt: user.passwordSalt,
            hashedPassword: user.password
        })

        if (PasswordMatch !== true) {
            return res.status(400).json({
                success: false,
                message: "Invalid email and Password",
                data: null
            })
        }
        let website_auth_session = giveAuthSessionId()
        let RedisMessage = await RedisClient.set(
            `session:website_auth_session:${website_auth_session}`,
            JSON.stringify({
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
            }),
            "EX",
            60 * 60 * 24 * 30
        )
        if (RedisMessage !== 'OK') {
            return res.status(400).json({
                success: false,
                message: 'Internal server error. Redis Error',
                data: null,
            });
        }
        res.statusCode = 200;
        res.cookie("website_auth_session", website_auth_session, {
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            secure: false,
            httpOnly: true,
            sameSite: false,
        });
        res.end();
        return;
    } catch (error) {
        catchError(error, res)
    }
})



router.get("/is-authenticated", async function (req: Request, res: Response): Promise<any> {
    try {
        let session: string | undefined = req.cookies.website_auth_session;
        if (!session) {
            return res.status(401).json({
                success: false,
                message: "You Are not logged In",
                data: null
            });
        }
        let userData = await RedisClient.get(`session:website_auth_session:${session.normalize()}`);

        if (!userData) {
            return res.status(401).json({
                success: false,
                message: "You Are Logged Out",
                data: null
            });
        }

        let validationRasult = await cookieUserSchema.safeParseAsync(JSON.parse(userData))

        if (!validationRasult.success) {
            return res.status(401).json({
                success: false,
                message: "Invalid Data of User",
                data: null
            });
        }

        return res.status(200).json({
            success: true,
            message: "OK",
            data: JSON.parse(userData)
        });
    } catch (error) {
        catchError(error, res)
    }
});

router.post('/log-out',async function (req: Request, res: Response): Promise<any> {
    try {
        let IsUserLoggedIn = await IsLoggedIn(req);
        if (!IsUserLoggedIn) {
            res.status(401).json({
                success : false ,
                message : "You are not Logged In",
                data : null
            });
            return;
        }
        res.statusCode =200;
        res.clearCookie("website_auth_session" ,{ secure: false,
            httpOnly: true,
            sameSite: false
        });
        res.end(JSON.stringify({
            success : true ,
            message : "OK",
            data : null
        }))
        return;

    } catch (error) {
        catchError(error, res);
    }
} )




export default router
