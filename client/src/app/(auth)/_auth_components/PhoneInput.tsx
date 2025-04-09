/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import { ErrorMessage, Field } from 'formik';
import React, { useState, useEffect, useMemo } from 'react';
import { useDebouncedCallback } from 'use-debounce';



// Define interfaces for our types
interface CountryCode {
    country: string;
    code: string;
    flag: string;
}

interface PhoneInputProps {
    name : string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    onKeyPress?: (event: React.KeyboardEvent) => void;
    setValue : (key : string , value : string) => void;
    hasError : boolean;
    setPhoneDetails : React.Dispatch<React.SetStateAction<any>>;
}

const countryCodes: CountryCode[] = [
    { country: 'Bangladesh', code: '+880', flag: '🇧🇩' },
    { country: 'United States', code: '+1', flag: '🇺🇸' },
    { country: 'United Kingdom', code: '+44', flag: '🇬🇧' },
    { country: 'India', code: '+91', flag: '🇮🇳' },
    { country: 'Canada', code: '+1', flag: '🇨🇦' },
    { country: 'Australia', code: '+61', flag: '🇦🇺' },
    { country: 'Germany', code: '+49', flag: '🇩🇪' },
    { country: 'France', code: '+33', flag: '🇫🇷' },
    { country: 'China', code: '+86', flag: '🇨🇳' },
    { country: 'Japan', code: '+81', flag: '🇯🇵' },
    { country: 'Brazil', code: '+55', flag: '🇧🇷' },
    { country: 'Mexico', code: '+52', flag: '🇲🇽' },
    { country: 'Italy', code: '+39', flag: '🇮🇹' },
    { country: 'Spain', code: '+34', flag: '🇪🇸' },
    { country: 'Russia', code: '+7', flag: '🇷🇺' },
    { country: 'South Korea', code: '+82', flag: '🇰🇷' },

    // Additional Asian countries
    { country: 'Pakistan', code: '+92', flag: '🇵🇰' },
    { country: 'Indonesia', code: '+62', flag: '🇮🇩' },
    { country: 'Philippines', code: '+63', flag: '🇵🇭' },
    { country: 'Vietnam', code: '+84', flag: '🇻🇳' },
    { country: 'Thailand', code: '+66', flag: '🇹🇭' },
    { country: 'Malaysia', code: '+60', flag: '🇲🇾' },
    { country: 'Singapore', code: '+65', flag: '🇸🇬' },
    { country: 'Nepal', code: '+977', flag: '🇳🇵' },
    { country: 'Sri Lanka', code: '+94', flag: '🇱🇰' },
    { country: 'Myanmar', code: '+95', flag: '🇲🇲' },
    { country: 'Cambodia', code: '+855', flag: '🇰🇭' },
    { country: 'Hong Kong', code: '+852', flag: '🇭🇰' },
    { country: 'Taiwan', code: '+886', flag: '🇹🇼' },
    { country: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
    { country: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
    { country: 'Israel', code: '+972', flag: '🇮🇱' },

    // Additional European countries
    { country: 'Netherlands', code: '+31', flag: '🇳🇱' },
    { country: 'Sweden', code: '+46', flag: '🇸🇪' },
    { country: 'Norway', code: '+47', flag: '🇳🇴' },
    { country: 'Denmark', code: '+45', flag: '🇩🇰' },
    { country: 'Finland', code: '+358', flag: '🇫🇮' },
    { country: 'Switzerland', code: '+41', flag: '🇨🇭' },
    { country: 'Austria', code: '+43', flag: '🇦🇹' },
    { country: 'Belgium', code: '+32', flag: '🇧🇪' },
    { country: 'Portugal', code: '+351', flag: '🇵🇹' },
    { country: 'Greece', code: '+30', flag: '🇬🇷' },
    { country: 'Ireland', code: '+353', flag: '🇮🇪' },
    { country: 'Poland', code: '+48', flag: '🇵🇱' },
    { country: 'Ukraine', code: '+380', flag: '🇺🇦' },
    { country: 'Romania', code: '+40', flag: '🇷🇴' },
    { country: 'Czech Republic', code: '+420', flag: '🇨🇿' },
    { country: 'Hungary', code: '+36', flag: '🇭🇺' },

    // Additional countries from other regions
    { country: 'South Africa', code: '+27', flag: '🇿🇦' },
    { country: 'Nigeria', code: '+234', flag: '🇳🇬' },
    { country: 'Egypt', code: '+20', flag: '🇪🇬' },
    { country: 'Morocco', code: '+212', flag: '🇲🇦' },
    { country: 'Kenya', code: '+254', flag: '🇰🇪' },
    { country: 'Argentina', code: '+54', flag: '🇦🇷' },
    { country: 'Colombia', code: '+57', flag: '🇨🇴' },
    { country: 'Chile', code: '+56', flag: '🇨🇱' },
    { country: 'Peru', code: '+51', flag: '🇵🇪' },
    { country: 'New Zealand', code: '+64', flag: '🇳🇿' },
    { country: 'Turkey', code: '+90', flag: '🇹🇷' }
];

const PhoneInput: React.FC<PhoneInputProps> = ({
    name,
    placeholder = 'Enter phone number',
    required = false,
    disabled = false,
    className = '',
    setValue,
    onKeyPress,
    hasError ,
    setPhoneDetails
}) => {
    const [selectedCountry, setSelectedCountry] = useState<CountryCode>(countryCodes[0]);
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const phoneRegex = /^\+\d{1,4}\d{8,}$/;
   
    // Validate the phone number
    useMemo(() => {
       setValue(name, phoneNumber)
    } , [phoneNumber] );
    // Handle phone number input
    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        // Only allow digits and spaces
        const sanitizedValue = inputValue.replace(/[^\d\s]/g, '');
        setPhoneNumber(sanitizedValue);
    };

    const selectCountry = (country: CountryCode) => {
        setSelectedCountry(country);
        setDropdownOpen(false);
    };

    useEffect(() => {
        setPhoneDetails({
            countryName : selectedCountry.country,
            phoneCode : selectedCountry.code
        })
    } , [selectedCountry])

    return (
        <div className={`relative ${className}`}>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <div className="flex rounded-md shadow-sm">
                {/* Country code dropdown button */}
                <div className="relative">
                    <button
                        type="button"
                        className="flex items-center justify-center px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md hover:bg-gray-200"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        disabled={disabled}
                    >
                        <span className="mr-1">{selectedCountry.flag}</span>
                        <span>{selectedCountry.code}</span>
                        <span className="ml-1">▼</span>
                    </button>

                    {/* Country code dropdown */}
                    {dropdownOpen && (
                        <div className="absolute z-10 w-64 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                            <ul className="py-1">
                                {countryCodes.map((country) => (
                                    <li
                                        key={`${country.country}-${country.code}`}
                                        className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
                                        onClick={() => selectCountry(country)}
                                    >
                                        <span className="mr-2">{country.flag}</span>
                                        <span>{country.country}</span>
                                        <span className="ml-auto text-gray-500">{country.code}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                
               
                {/* Phone number input */}
                <Field
                    name={name}
                    id={name}
                    type="phone"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    onKeyPress={onKeyPress}
                    className={`flex-1 min-w-0 block w-full px-3 py-2 rounded-r-md border ${hasError ? 'border-red-300' : 'border-gray-300'  
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    aria-invalid={hasError}
                   
                    maxLength={11}
                />

               
            </div>
            <ErrorMessage id={name } name={name}  component="div" className="mt-1 text-sm text-red-600" />
        
        </div>
    );
};



export default PhoneInput;