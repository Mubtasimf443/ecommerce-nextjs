/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
export interface IUserFormData {
    firstName: string;
    lastName: string;
    phone: string;
    phoneDetails: {
        countryName: string;
        phoneCode: string;
    };
    address: string;
    division: string;
    district: string;
    upazila: string;
    city: string;
    paymentMethod: 'bkash' | 'nagad' | 'rocket' | 'cod';
}

export interface IUserFormDataErrors {
    firstName?: string;
    lastName?: string;
    phone?: string;
    address?: string;
    division?: string;
    district?: string;
    upazila?: string;
    city?: string;
    paymentMethod?: string;
}

export interface IUserFormDataTouched {
    firstName?: boolean;
    lastName?: boolean;
    phone?: boolean;
    address?: boolean;
    division?: boolean;
    district?: boolean;
    upazila?: boolean;
    city?: boolean;
    paymentMethod?: boolean;
}

export interface LocationData {
    id: string;
    name: string;
}