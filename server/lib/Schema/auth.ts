/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import { z } from "zod";

export const signUpSchema = z.object({
  firstName : z.string().min(3,).max(20).trim(),
  lastName : z.string().min(3).max(20).trim( ),
  email: z.string().email().max(300).trim().min(5),
  password: z.string().min(8, {message : "Password must be at least 8 characters"}).max(32),
  division : z.string().min(3).max(35).trim(),
  district : z.string().min(3).max(35).trim(),
  upazila : z.string().min(3).max(35).trim(),
  city : z.string().min(3).max(35).trim(),
  phone : z.string().min(11).max(11).trim(),
});

export const signInSchema = z.object({
  email: z.string().email().max(300).trim().min(5),
  password: z.string().min(8, {message : "Password must be at least 8 characters"}).max(32),
});

export const SignUpOtpVerificationSchema = z.object({
  otp: z.number().lt(10000000,{message :'OTP must be a 6-digit number'}).gt(999999, { 
    message:'OTP must be a 6-digit number'
  }),
  session: z.string().min(500,{message :"Invalid session token"}).max(600, {
    message: "Invalid session token"
  }).trim(),
 
});

export const resetPasswordSchema = z.object({
  email: z.string().email().max(300).trim().min(5,""),
  newPassword: z.string().min(8, {message : "Password must be at least 8 characters"}).max(32,""),
});
