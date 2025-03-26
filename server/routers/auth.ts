/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import express, { Request, Response } from 'express';
import { cors } from '../config/Cors';
import { catchError } from '../lib/errors/CatchError';

import jwt from 'jsonwebtoken';
import { z } from 'zod';
import User from '../models/User';
import { signUpSchema } from '../lib/Schema/auth';
import { generateSalt, hashPassword } from '../lib/core/passwordHasher';


const router :express.Router = express.Router()


router.post('/signUp', cors, async function (req : Request, res : Response) : Promise<any | undefined>{
  try {
    let { data, error, success }= signUpSchema.safeParse(req.body);
    if (error ) {
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
        let hashedPassword =await hashPassword(data.password, salt);
        let newUser = await User.create({
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
            }
        });


        return res.status(200).json({
            success: true,
            message: 'User created successfully',
            data: newUser,
        });


    }
    


  } catch (error) {
    catchError(error, res) 
  }
})
export default router
