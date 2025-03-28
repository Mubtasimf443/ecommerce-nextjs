/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import { z } from "zod";
export const signUpSchema = z.object({
  firstName: z.string({ message: "Invalid first name" })
    .min(3, "First name must be minimum 3 characters")
    .max(20, "First name must be max 20 characters")
    .trim(),
  lastName: z.string({ message: "Invalid last name" })
    .min(3, "Last name must be minimum 3 characters")
    .max(20, "Last name must be max 20 characters")
    .trim(),
  email: z.string({ message: "Invalid email address" })
    .email("Please enter a valid email address")
    .max(300, "Email is too long")
    .min(5, "Email is too short")
    .trim(),
  password: z.string({ message: "Invalid password" })
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must not exceed 32 characters"),
  division: z.string({ message: "Invalid division" })
    .min(3, "Division must be minimum 3 characters")
    .max(35, "Division must not exceed 35 characters")
    .trim(),
  district: z.string({ message: "Invalid district" })
    .min(3, "District must be minimum 3 characters")
    .max(35, "District must not exceed 35 characters")
    .trim(),
  upazila: z.string({ message: "Invalid upazila" })
    .min(3, "Upazila must be minimum 3 characters")
    .max(35, "Upazila must not exceed 35 characters")
    .trim(),
  city: z.string({ message: "Invalid city" })
    .min(3, "City must be minimum 3 characters")
    .max(35, "City must not exceed 35 characters")
    .trim(),
  phone: z.string({ message: "Invalid phone number" })
    .min(11, "Phone number must be 11 digits")
    .max(11, "Phone number must be 11 digits")
    .trim(),
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
