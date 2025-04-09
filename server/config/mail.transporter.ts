/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import nodemailer from 'nodemailer';
import { SERVER_STATE, SMTP_HOST, SMTP_PASSWORD, SMTP_PORT, SMTP_USERNAME , SMTP_API_KEY} from '../env';
import { MailOptions } from 'nodemailer/lib/ses-transport';

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    // service: SMTP_HOST,
    secure: false,
    auth: {
        user: SMTP_USERNAME,
        pass: SMTP_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
        ciphers:'SSLv3'
    },
    connectionTimeout: 10000, 
    dnsTimeout : 3000,
    socketTimeout : 3000,
    greetingTimeout : 3000
})


// class transporter {
//     public errorTime :number;
//     constructor(errorTime:number){
//        this.errorTime =errorTime;
//     }
//     async sendMail(options : MailOptions) {
//         console.log(options);
        
//         let timeout = setTimeout(() => {
//             throw new Error("Failed To send Mail in " + ((this.errorTime || 5000) / 1000) + " seconds");
//         }, this.errorTime || 5000);
//         let info =await mailer.sendMail(options);
//         console.log(info);
        
//         clearTimeout(timeout);
//         return info;
//     }
// }


export default transporter // (new transporter(5000));