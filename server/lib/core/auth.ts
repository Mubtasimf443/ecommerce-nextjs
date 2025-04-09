/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import crypto from "crypto"

export function hashPassword(password: string, salt: string): Promise<string> {
    return new Promise((resolve, reject) => {
      crypto.scrypt(password.normalize(), salt, 64, (error, hash) => {
        if (error) reject('Error in hassing the password')

        resolve(hash.toString("hex").normalize())
      })
    })
  }

  export async function comparePasswords({
    password,
    salt,
    hashedPassword,
  }: {
    password: string
    salt: string
    hashedPassword: string
  }) {
    const inputHashedPassword = await hashPassword(password, salt)
  
    return crypto.timingSafeEqual(
      Buffer.from(inputHashedPassword, "hex"),
      Buffer.from(hashedPassword, "hex")
    )
  }
  
  export function generateSalt() {
    return crypto.randomBytes(16).toString("hex").normalize()
  }



 export function GenerateOtp() {
    function giveOtp() {
      return Math.floor( Math.random() * 999999)
    }
    let otp = giveOtp()
    for (let i = 0; true; i++) {
        if (otp > 99999 && otp < 1000000) {
          return otp;
        }
        else otp = giveOtp();
    }
  }


 export function giveAuthSessionId() {
    let token:string = crypto.randomBytes(512).toString("hex").normalize();
    return token;
  }

