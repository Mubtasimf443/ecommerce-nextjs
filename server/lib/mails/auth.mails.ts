/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import transporter from "../../config/mail.transporter";
import { COMPANY_MAIL, COMPANY_NAME, COMPANY_LOGO, COMPANY_CONTACT_ADDRESS, COMPANY_ADMIN_NAME, COMPANY_CONTACT_EMAIL, COMPANY_CONTACT_PHONE } from "../../env";

async function signUpOtpVerificationEmail(otp_code: number, receiverEmail: string) {
    try {
        const info = await transporter.sendMail({
            from: `"${COMPANY_NAME}" <${COMPANY_MAIL}>`,
            to: receiverEmail,
            subject: `Verify Your Email Address - ${COMPANY_NAME}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img src="${COMPANY_LOGO}" alt="${COMPANY_NAME} Logo" style="max-width: 200px;">
                    </div>
                    <h2 style="color: #333;">Email Verification</h2>
                    <p>Thank you for signing up with ${COMPANY_NAME}! To complete your registration, please use the following verification code:</p>
                    <div style="background-color: #f4f4f4; padding: 15px; text-align: center; margin: 20px 0;">
                        <h1 style="color: #4CAF50; margin: 0;">${otp_code}</h1>
                    </div>
                    <p>This code will expire in 10 minutes.</p>
                    <p>If you didn't request this verification, please ignore this email or contact us at ${COMPANY_CONTACT_EMAIL}.</p>
                    <hr style="border: 1px solid #eee; margin: 20px 0;">
                    <div style="font-size: 12px; color: #666;">
                        <p>Contact Information:</p>
                        <p>${COMPANY_NAME}</p>
                        <p>${COMPANY_CONTACT_ADDRESS}</p>
                        <p>Email: ${COMPANY_CONTACT_EMAIL}</p>
                        <p>Phone: ${COMPANY_CONTACT_PHONE}</p>
                    </div>
                </div>
            `
        });
        console.log('Verification email sent:', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending verification email:', error);
        return false;
    }
}

async function signUpSuccessfulEmail(receiverEmail: string, userName: string) {
    try {
        const info = await transporter.sendMail({
            from: `"${COMPANY_NAME}" <${COMPANY_MAIL}>`,
            to: receiverEmail,
            subject: `Welcome to ${COMPANY_NAME}!`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img src="${COMPANY_LOGO}" alt="${COMPANY_NAME} Logo" style="max-width: 200px;">
                    </div>
                    <h2 style="color: #333;">Welcome ${userName}!</h2>
                    <p>Thank you for joining ${COMPANY_NAME}. Your account has been successfully created.</p>
                    <div style="background-color: #f4f4f4; padding: 15px; margin: 20px 0;">
                        <p>Here are some things you can do now:</p>
                        <ul>
                            <li>Complete your profile</li>
                            <li>Browse our products</li>
                            <li>Add items to your wishlist</li>
                        </ul>
                    </div>
                    <p>If you have any questions, our support team is here to help!</p>
                    <p>Best regards,<br>${COMPANY_ADMIN_NAME}<br>${COMPANY_NAME}</p>
                    <hr style="border: 1px solid #eee; margin: 20px 0;">
                    <div style="font-size: 12px; color: #666;">
                        <p>Contact Information:</p>
                        <p>${COMPANY_NAME}</p>
                        <p>${COMPANY_CONTACT_ADDRESS}</p>
                        <p>Email: ${COMPANY_CONTACT_EMAIL}</p>
                        <p>Phone: ${COMPANY_CONTACT_PHONE}</p>
                    </div>
                </div>
            `
        });
        console.log('Welcome email sent:', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending welcome email:', error);
        return false;
    }
}

async function resetPasswordEmail(receiverEmail: string, resetToken: string) {
    try {
        const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
        const info = await transporter.sendMail({
            from: `"${COMPANY_NAME}" <${COMPANY_MAIL}>`,
            to: receiverEmail,
            subject: `Password Reset Request - ${COMPANY_NAME}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img src="${COMPANY_LOGO}" alt="${COMPANY_NAME} Logo" style="max-width: 200px;">
                    </div>
                    <h2 style="color: #333;">Password Reset Request</h2>
                    <p>We received a request to reset your password for your ${COMPANY_NAME} account. Click the button below to create a new password:</p>
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${resetLink}" style="background-color: #4CAF50; color: white; padding: 12px 25px; text-decoration: none; border-radius: 4px;">Reset Password</a>
                    </div>
                    <p>This link will expire in 1 hour.</p>
                    <p>If you didn't request this password reset, please contact us immediately at ${COMPANY_CONTACT_EMAIL}.</p>
                    <hr style="border: 1px solid #eee; margin: 20px 0;">
                    <div style="font-size: 12px; color: #666;">
                        <p>Contact Information:</p>
                        <p>${COMPANY_NAME}</p>
                        <p>${COMPANY_CONTACT_ADDRESS}</p>
                        <p>Email: ${COMPANY_CONTACT_EMAIL}</p>
                        <p>Phone: ${COMPANY_CONTACT_PHONE}</p>
                    </div>
                </div>
            `
        });
        console.log('Password reset email sent:', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending password reset email:', error);
        return false;
    }
}

export const authEmails = {
    signUpOtpVerificationEmail,
    signUpSuccessfulEmail,
    resetPasswordEmail
}