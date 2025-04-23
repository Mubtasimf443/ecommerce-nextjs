/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"

import React, { useState, useRef, useEffect } from 'react';
import { ErrorMessage, Field } from 'formik';
import { PhoneDetailsState } from './PhoneDetails.types';
import { Label } from '@/components/ui/shadcn/label';
import { Input } from '@/components/ui/shadcn/input';
import { countryCodes, CountryCode } from '@/_lib/data/countryCodes'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/shadcn/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/shadcn/popover"
import { Button } from "@/components/ui/shadcn/button"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"

// ... keep your CountryCode interface and countryCodes array the same ...
interface PhoneInputProps {
    name: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    value?: string;
    setValue: (name: string, value: string) => void;
    hasError: boolean;
    setPhoneDetails: React.Dispatch<React.SetStateAction<PhoneDetailsState>>;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
    name,
    placeholder = 'Enter phone number',
    required = false,
    disabled = false,
    className = '',
    value = '',
    setValue,
    hasError,
    setPhoneDetails
}) => {
    const [selectedCountry, setSelectedCountry] = useState<CountryCode>(countryCodes[0]);
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const sanitizedValue = inputValue.replace(/\D/g, '');
        setValue(name, sanitizedValue);

        setPhoneDetails(prev => ({
            countryName: selectedCountry.country,
            phoneCode: selectedCountry.code,
            phoneNumber: sanitizedValue,
            isValid: sanitizedValue.length === 11
        }));
    };

    const selectCountry = (country: CountryCode) => {
        setSelectedCountry(country);
        setOpen(false);

        setPhoneDetails(prev => prev ? {
            ...prev,
            countryName: country.country,
            phoneCode: country.code
        } : {
            countryName: country.country,
            phoneCode: country.code,
            phoneNumber: value,
            isValid: value.length === 11
        });
    };

    const filteredCountries = countryCodes.filter((country) =>
        country.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.code.includes(searchQuery)
    );

    return (
        <div className={`space-y-2 ${className}`}>
            <Label htmlFor={name}>
                Phone Number {required && <span className="text-destructive">*</span>}
            </Label>

            <div className="flex gap-2">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            aria-label="Select a country"
                            className={cn(
                                "w-[140px] justify-between",
                                disabled && "opacity-50 cursor-not-allowed"
                            )}
                            disabled={disabled}
                        >
                            <span className="flex items-center gap-2 truncate">
                                <span className="text-base">{selectedCountry.flag}</span>
                                <span className="text-sm font-medium">{selectedCountry.code}</span>
                            </span>
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[300px] p-0">
                        <Command>
                            <CommandInput
                                placeholder="Search country..."
                                className="h-9"
                                value={searchQuery}
                                onValueChange={setSearchQuery}
                            />
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                                <CommandList>
                                    <div className="max-h-[200px] overflow-auto">
                                        {filteredCountries.map((country) => (
                                            <CommandItem
                                                key={`${country.country}-${country.code}`}
                                                value={`${country.country} ${country.code}`}
                                                onSelect={() => selectCountry(country)}
                                                className="flex items-center gap-2 px-4 py-2 cursor-pointer"
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        selectedCountry.code === country.code
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    )}
                                                />
                                                <span className="text-base mr-2">{country.flag}</span>
                                                <span className="flex-1 text-sm">{country.country}</span>
                                                <span className="text-sm text-muted-foreground">
                                                    {country.code}
                                                </span>
                                            </CommandItem>
                                        ))}
                                    </div>
                                </CommandList>
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>

                <div className="flex-1">
                    <Input
                        type="tel"
                        id={name}
                        name={name}
                        value={value}
                        onChange={handlePhoneNumberChange}
                        className={cn(
                            hasError && "border-destructive focus-visible:ring-destructive"
                        )}
                        placeholder={placeholder}
                        required={required}
                        disabled={disabled}
                        maxLength={11}
                    />
                </div>
            </div>

            <ErrorMessage
                name={name}
                component="div"
                className="text-sm font-medium text-destructive"
            />
        </div>
    );
};

export default PhoneInput;