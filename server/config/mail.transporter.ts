/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import nodemailer from 'nodemailer';
import { SERVER_STATE, SMTP_HOST, SMTP_PASSWORD, SMTP_PORT, SMTP_USERNAME , SMTP_API_KEY} from '../env';

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
})


export default transporter;