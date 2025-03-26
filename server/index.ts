/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import express, { Express, Request, Response } from "express";
import { connectDb } from "./config/connectDb";
import authRouter from "./routers/auth";
import transporter from './config/mail.transporter'
import { COMPANY_MAIL, SMTP_USERNAME } from "./env";


async function main() {
  const app: Express = express();
  await connectDb()




  
  app.get("/api/search")
  app.use('/api/auth', authRouter)
  app.listen(4000, () => {
    console.log(`Alhamdulillah Server is running on port 4000`);
  });
}

main()