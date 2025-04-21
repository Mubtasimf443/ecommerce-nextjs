/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
export interface IUserFormData {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    paymentMethod: 'bkash' | 'nagad' | 'rocket' | 'cod';
}

export interface IUserFormDataErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    address?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    paymentMethod?: string;
}

export interface IUserFormDataTouched {
    firstName?: string;
    lastName?: string;
    email?: string;
    address?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    paymentMethod?:string;
}
