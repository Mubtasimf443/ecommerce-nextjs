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
export const COMPANY_NAME:string |undefined=process.env.COMPANY_NAME
// smtp 
export const SMTP_HOST :string |undefined=process.env.SMTP_HOST
export const SMTP_PORT :string |undefined=process.env.SMTP_PORT
export const SMTP_USERNAME :string |undefined=process.env.SMTP_USERNAME
export const SMTP_PASSWORD :string |undefined=process.env.SMTP_PASSWORD
export const SMTP_API_KEY :string |undefined=process.env.SMTP_API_KEY


// company
export const COMPANY_MAIL:string |undefined = process.env.COMPANY_MAIL
export const COMPANY_LOGO:string |undefined = process.env.COMPANY_LOGO
export const COMPANY_CONTACT_PHONE:string |undefined = process.env.COMPANY_CONTACT_PHONE
export const COMPANY_CONTACT_EMAIL:string |undefined = process.env.COMPANY_CONTACT_EMAIL
export const COMPANY_CONTACT_ADDRESS:string |undefined = process.env.COMPANY_CONTACT_ADDRESS
export const COMPANY_ADMIN_NAME:string |undefined = process.env.COMPANY_ADMIN_NAME
