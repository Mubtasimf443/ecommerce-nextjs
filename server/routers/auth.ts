/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import express, { Request, Response } from 'express';
import { cors } from '../config/Cors';
import { catchError } from '../lib/errors/CatchError';

import jwt from 'jsonwebtoken';
import { z } from 'zod';
import User from '../models/User';
import { signInSchema, SignUpOtpVerificationSchema, signUpSchema ,} from '../lib/Schema/auth';
import { comparePasswords, GenerateOtp, generateSalt, giveAuthSessionId, hashPassword } from '../lib/core/auth';
import { RedisClient } from '../config/redis';
import { authEmails } from '../lib/mails/auth.mails';
import CookieParser from "cookie-parser";

const router :express.Router = express.Router()
router.use(cors)
router.use(CookieParser())
router.use(express.json())


router.post('/signUp', async function (req: Request, res: Response): Promise<any | undefined> {
    try {
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
            if (user) {
                return res.status(400).json({
                    success: false,
                    message: 'User already exists',
                    data: null,
                })
            }

            let salt = generateSalt();
            let hashedPassword = await hashPassword(data.password, salt);
            let verification_otp: number = GenerateOtp()
            interface ShippingAddress {
                division: string;
                district: string;
                city: string;
                upazila: string;
            }

            interface NewUser {
                firstName: string;
                lastName: string;
                email: string;
                password: string;
                passwordSalt: string;
                isVarified: boolean;
                isRegistered: boolean;
                shipping_address: ShippingAddress;
                verification_otp: number;
            }

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
                verification_otp
            }
        let website_auth_sign_up_verification_session:string= giveAuthSessionId()

        let isEmailSend:boolean = await authEmails.signUpOtpVerificationEmail(verification_otp , data.email);
        
        if (isEmailSend===false ) {
            return res.status(500).json({
                success: false,
                message: 'Internal server error , Failed to send email',
                data: null, 
            })
        }

        let rasult = await RedisClient.set(
            `session:website_auth_sign_up_verification_session:${website_auth_sign_up_verification_session}`, 
            JSON.stringify(newUser), "EX", 65 
        );
        
        if (rasult !== 'OK') {
            return res.status(500).json({
                success: false,
                message: 'Internal server error . Redis Error',
                data: null,
            });
        }


      
        res.statusCode=200;
        res.cookie("website_auth_sign_up_verification_session",website_auth_sign_up_verification_session , {
            secure: false,
            httpOnly:true,
            sameSite : false ,
            expires : new Date(Date.now() + 65*1000)
        })
        return ;
    }
  } catch (error) {
    catchError(error, res) 
  }
})
router.post("/sign-up/verification" ,async function (req:Request , res:Response) :Promise<any>{
    try {
        let {success , data, error }=SignUpOtpVerificationSchema.safeParse({
            otp:req.body.otp,
            session:req.cookies.website_auth_sign_up_verification_session
        });

        if (success==false  || data === undefined) {
            return res.status(400).json({
                success: false,
                message: error?.errors[0]?.message || "Invalid data",
                data: null
            })
        }
        interface ShippingAddress {
            division: string;
            district: string;
            city: string;
            upazila: string;
        }

        interface NewUser {
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            passwordSalt: string;
            isVarified: boolean;
            isRegistered: boolean;
            shipping_address: ShippingAddress;
            verification_otp: number;
        }
        let userData:string | NewUser| null = await RedisClient.get(`session:website_auth_sign_up_verification_session:${data.session}`)
        if (userData==null) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP or session",
                data: null
            })
        }


        userData = (function() :NewUser {return JSON.parse(userData)})()

       if (userData.verification_otp!==data.otp) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP",
                data: null
            })
        }

        userData.isVarified=true;

        let exitstingUser = await User.findOne({email :userData.email})
        
        if (exitstingUser !== null) {
            return  res.status(400).json({
                success : false ,
                message : "Your Account Already is Verified",
                data:null
            })
        }

        let user = await User.create(userData)
        if (user==null) {
            return res.status(400).json({
                success : false ,
                message : "Database error , Failed to create user",
                data:null
            })
        }


        await authEmails.signUpSuccessfulEmail(userData.email , userData.firstName )
        
        await RedisClient.del(`session:website_auth_sign_up_verification_session:${data.session}`);

        let website_auth_session= giveAuthSessionId()
        let RedisMessage = await RedisClient.set(
            `session:website_auth_session:${website_auth_session}`,
            JSON.stringify({
                _id : user._id,
                email : user.email,
                firstName : user.firstName,
                lastName : user.lastName,
            }), 
            "EX", 
            60 * 60 * 24 * 30
        )
        if (RedisMessage!=='OK') {
           console.log({
                success: false,
                message: 'Internal server error. Redis Error',
                data: null,
            });
        }
        res.statusCode=200;
        res.cookie("website_auth_session", website_auth_session , {
            expires : new Date(Date.now()+ 30*24*60*60*1000),
            secure: false,
            httpOnly:true,
            sameSite : false ,
        });
        return;

    } catch (error) {
       catchError(error ,res ) 
    }
})
router.post("/sign-in",async function (req:Request , res:Response) :Promise<any>{
    try {
        let {success , data , error} = signInSchema.safeParse(req.body)
        if (!success || !data) {
            return res.status(400).json({
                success :false ,
                message :error?.errors[0]?.message || "validation error", 
                data : null
            })
        }

        let user =await User.findOne().where("email").equals(data.email)

        if (!user ) {
            return res.status(400).json({})
        }

        let PasswordMatch =await comparePasswords({
            password : data.password,
            salt : user.passwordSalt ,
            hashedPassword : user.password
        })

        if (PasswordMatch !== true ) {
            return res.status(400).json({})
        }
        let website_auth_session= giveAuthSessionId()
        let RedisMessage = await RedisClient.set(
            `session:website_auth_session:${website_auth_session}`,
            JSON.stringify({
                _id : user._id,
                email : user.email,
                firstName : user.firstName,
                lastName : user.lastName,
            }), 
            "EX", 
            60 * 60 * 24 * 30
        )
        if (RedisMessage!=='OK') {
           console.log({
                success: false,
                message: 'Internal server error. Redis Error',
                data: null,
            });
        }
        res.statusCode=200;
        res.cookie("website_auth_session", website_auth_session , {
            expires : new Date(Date.now()+ 30*24*60*60*1000),
            secure: false,
            httpOnly:true,
            sameSite : false ,
        });
        return;
    } catch (error) {
        catchError(error,res)
    }
})


export default router
