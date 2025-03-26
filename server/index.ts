/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import express, { Express, Request, Response } from "express";
import { connectDb } from "./config/connectDb";
import authRouter from "./routers/auth";
import transporter from './config/mail.transporter'


async function main() {
  const app: Express = express();
  await connectDb()


  await transporter.sendMail({
    from: 'mubtasimf mubtasimf443@gmail.com ',
    to:"haqurhaquekotabola@gmail.com",
    subject: 'testing the email',
    text: 'InshaAllah ',
    html: '<b>InshaAllah </b>',
  
  })
  .then(info => console.log(info.messageId))
  .catch(error => console.log(error)
  )
  app.get("/api/search")
  app.use('/api/auth', authRouter)
  app.listen(4000, () => {
    console.log(`Alhamdulillah Server is running on port 4000`);
  });
}

main()