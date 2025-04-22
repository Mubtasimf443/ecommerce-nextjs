/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
export interface PhoneDetails {
    countryName: string;
    phoneCode: string;
    phoneNumber?: string;
    isValid?: boolean;
}

export type PhoneDetailsState = PhoneDetails | null;