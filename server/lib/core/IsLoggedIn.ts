/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import { Request } from "express";
import { RedisClient } from "../../config/redis";
import { cookieUserSchema } from "../Schema/auth";



export default  async function IsLoggedIn(req: Request): Promise<boolean> {
    try {
        let session :string |undefined= req.cookies.website_auth_session;
        if (!session) return false;
        let userData = await RedisClient.get(`session:website_auth_session:${session.normalize()}`);

        if (!userData) {
            return false;
        }

        
        let validationRasult = await cookieUserSchema.safeParseAsync(JSON.parse(userData))

        if (!validationRasult.success) {
            return false
        }

        return true;
        
    } catch (error) {
      console.error("IsLoggedIn Controller Error" , error);
      return false;
    }
  }