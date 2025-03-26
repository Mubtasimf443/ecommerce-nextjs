/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import dotenv from "dotenv";

dotenv.config();
// Database
export const DB_URL :any = process.env.DB_URL ;
export const TEST_DB_URL :any = process.env.TEST_DB_URL ;
export const REDIS_URL:any= process.env.REDIS_URL

// server
export const SERVER_STATE :string |undefined=process.env.SERVER_STATE

// smtp 
export const SMTP_HOST :string |undefined=process.env.SMTP_HOST
export const SMTP_PORT :string |undefined=process.env.SMTP_PORT
export const SMTP_USERNAME :string |undefined=process.env.SMTP_USERNAME
export const SMTP_PASSWORD :string |undefined=process.env.SMTP_PASSWORD
export const SMTP_API_KEY :string |undefined=process.env.SMTP_API_KEY