/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import { z } from "zod";

export const signUpSchema = z.object({
  firstName : z.string().min(3,).max(20).trim(),
  lastName : z.string().min(3).max(20).trim( ),
  email: z.string().email().max(50).trim().min(5),
  password: z.string().min(8, {message : "Password must be at least 8 characters"}).max(32),
  division : z.string().min(3).max(35).trim(),
  district : z.string().min(3).max(35).trim(),
  upazila : z.string().min(3).max(35).trim(),
  city : z.string().min(3).max(35).trim(),
  phone : z.string().min(11).max(11).trim(),
});

export const signInSchema = z.object({
  email: z.string().email().max(50).trim().min(5),
  password: z.string().min(8, {message : "Password must be at least 8 characters"}).max(32),
});