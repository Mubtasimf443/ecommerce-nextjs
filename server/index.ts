/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import express, { Express, Request, Response } from "express";
import { connectDb } from "./config/connectDb";
import authRouter from "./routers/auth";
import locationRouter from "./routers/location";
import morgan from 'morgan'
import transporter from './config/mail.transporter'
import { COMPANY_MAIL, SMTP_USERNAME } from "./env";
import { cors } from "./config/Cors";
import attributeRouter from "./routers/attribute";


async function main() {
  const app: Express = express();
  await connectDb()


  app.get("/PING" , cors,(req : any , res : Response) : any => res.send("PONG"));
  app.get("/api/search")
  // app.use('/api/auth', authRouter)
  app.use('/api/location', locationRouter)
  app.use('/api/products/data/attributes', attributeRouter)
  app.listen(4000, () => {
    console.log(`Alhamdulillah Server is running on port 4000`);
  });
}

main()


// setInterval(() => {
//   console.log("Memory Uses of the server is " + (process.memoryUsage().heapTotal / (1024*1024 )) + "MB");
// }, 10000);