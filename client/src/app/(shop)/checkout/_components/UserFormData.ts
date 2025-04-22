/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

// Phone Details Interface
export interface IPhoneDetails {
    phoneNumber: string;
    countryName?: string;
    phoneCode?: string;
}

// Location Data Interface
export interface ILocationData {
    id: string;
    name: string;
}

// Main Form Data Interface
export interface IUserFormData {
    // Contact Information
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    phoneDetails?: IPhoneDetails;
    notes?: string; // Optional delivery instructions or special requests

    // Location Information
    division: string;
    district: string;
    upazila: string;
    city: string;
    postalCode: string;

    // Payment Information
    paymentMethod: 'bkash' | 'nagad' | 'rocket' | 'cod';
}

// Form Errors Interface
export interface IUserFormDataErrors {
    // Contact Information Errors
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    notes?: string;

    // Location Information Errors
    division?: string;
    district?: string;
    upazila?: string;
    city?: string;
    postalCode?: string;

    // Payment Information Errors
    paymentMethod?: string;
}

// Form Touched State Interface
export interface IUserFormDataTouched {
    // Contact Information Touched States
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phone?: boolean;
    notes?: boolean;

    // Location Information Touched States
    division?: boolean;
    district?: boolean;
    upazila?: boolean;
    city?: boolean;
    postalCode?: boolean;

    // Payment Information Touched States
    paymentMethod?: boolean;
}

// Initial Form Values
export const initialFormValues: IUserFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
    division: '',
    district: '',
    upazila: '',
    city: '',
    postalCode: '',
    paymentMethod: 'bkash'
};

// Payment Method Options
export const paymentMethods = [
    { id: 'bkash', name: 'bKash', icon: '/icons/bkash.svg' },
    { id: 'nagad', name: 'Nagad', icon: '/icons/nagad.svg' },
    { id: 'rocket', name: 'Rocket', icon: '/icons/rocket.svg' },
    { id: 'cod', name: 'Cash on Delivery', icon: '/icons/cod.svg' }
] as const;

// Form Field Validation Rules (You can use these with Yup)
export const formValidationRules = {
    firstName: {
        min: 3,
        max: 20,
        required: true
    },
    lastName: {
        min: 3,
        max: 20,
        required: true
    },
    email: {
        min: 5,
        max: 300,
        required: true
    },
    phone: {
        min: 11,
        max: 11,
        required: true
    },
    notes: {
        max: 500,
        required: false
    },
    division: {
        min: 3,
        max: 35,
        required: true
    },
    district: {
        min: 3,
        max: 35,
        required: true
    },
    upazila: {
        min: 3,
        max: 35,
        required: true
    },
    city: {
        min: 3,
        max: 35,
        required: true
    },
    postalCode: {
        min: 4,
        max: 4,
        required: true
    }
} as const;

// API Endpoints (for location data)
export const API_ENDPOINTS = {
    divisions: '/api/location/divisions',
    districts: '/api/location/district',
    upazilas: '/api/location/upazila',
    cities: '/api/location/city'
} as const;

// Error Messages
export const ERROR_MESSAGES = {
    required: 'This field is required',
    invalidEmail: 'Please enter a valid email address',
    invalidPhone: 'Please enter a valid phone number',
    invalidPostalCode: 'Please enter a valid postal code',
    minLength: (field: string, min: number) => `${field} must be at least ${min} characters`,
    maxLength: (field: string, max: number) => `${field} must be at most ${max} characters`
} as const;

// Form Section Titles
export const FORM_SECTIONS = {
    contact: 'Contact Information',
    shipping: 'Delivery Location',
    payment: 'Payment Method'
} as const;