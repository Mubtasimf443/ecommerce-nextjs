/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


interface ShippingAddress {
    division: string;
    district: string;
    city: string;
    upazila: string;
}

interface iPhoneDetails {
    phoneNumber: string;
    countryName: string;
    phoneCode: string;
}
export interface NewUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordSalt: string;
    isVarified: boolean;
    isRegistered: boolean;
    shipping_address: ShippingAddress;
    verification_otp: number;
    expiration: number;
    phoneDetails: iPhoneDetails ,
    opt_verification_session ?: string
}
