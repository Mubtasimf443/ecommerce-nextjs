/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import { z } from "zod";
import objectIdValidator from "./objectIdValidator";


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
    .max(100, "Email is too long")
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
  phoneDetails: z.object({
    phoneNumber: z.string({ message: "Invalid phone number" })
      .min(11, "Phone number must be 11 digits")
      .max(11, "Phone number must be 11 digits")
      .trim(),
    countryName: z.string({ message: "Invalid country name" })
      .min(2, "Country name must be minimum 2 characters")
      .trim(),
    phoneCode: z.string({ message: "Invalid phone code" })
      .min(1, "Phone code is required")
      .trim(),
  }),
});

export const signInSchema = z.object({
  email: z.string().email().max(100).trim().min(5),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }).max(32),
});

export const SignUpOtpVerificationSchema = z.object({
  otp: z.number()
    .lt(1000000, { message: 'OTP must be a 6-digit number' })
    .gt(99999, { message: 'OTP must be a 6-digit number' }),
  session: z
    .string({ message: "Internal server erorr , Please try to Create acconut after some times" })
    .min(1020, { message: "Invalid session token" })
    .max(1030, {  message: "Invalid session token"   }).trim(),
  opt_verification_session: z
    .string({ message: "Your Otp is expired , Please Request new Otp" })
    .min(106, "Your Otp is expired , Please Request new Otp")
    .max(110, "Your Otp is expired , Please Request new Otp")
});

export const resetPasswordSchema = z.object({
  email: z.string().email().max(100).trim().min(5, ""),
  newPassword: z.string().min(8, { message: "Password must be at least 8 characters" }).max(32, ""),
});



export const cookieUserSchema = z.object({
  _id: objectIdValidator,
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
    .max(100, "Email is too long")
    .min(5, "Email is too short")
    .trim(),
});


