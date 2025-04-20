/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"

import React, { useState, useEffect } from 'react'
import Form from '../../_auth_components/Form'
import { ErrorMessage, Field, Formik, Form as FormikForm } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import InputBox from '../../_auth_components/InputBox'
import SelectBox from '../../_auth_components/SelectBox'
import AuthButton from '../../_auth_components/AuthButton'
import { useRouter, useSearchParams } from 'next/navigation'
import Awaiter from '@/_lib/utils/awaiter'
import PhoneInput from '../../_auth_components/PhoneInput'
import AuthRequestClient from '../../_core/AuthRequest'
import { errorToast, successToast } from '@/_lib/core/toast'
import PasswordInput from '../../_auth_components/PasswordInput'

const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'First name must be at least 3 characters')
        .max(20, 'First name must be at most 20 characters')
        .trim()
        .required('First name is required'),
    lastName: Yup.string()
        .min(3, 'Last name must be at least 3 characters')
        .max(20, 'Last name must be at most 20 characters')
        .trim()
        .required('Last name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .min(5, 'Email must be at least 5 characters')
        .max(300, 'Email must be at most 300 characters')
        .trim()
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .max(32, 'Password must be at most 32 characters')
        .required('Password is required'),
    phone: Yup.string()
        .required('Phone number is required')
        .min(11, 'Phone number must be 11 digits')
        .max(11, 'Phone number must be 11 digits')
        .trim()

    ,
    division: Yup.string()
        .min(3, 'Division must be at least 3 characters')
        .max(35, 'Division must be at most 35 characters')
        .trim()
        .required('Division is required'),
    district: Yup.string()
        .min(3, 'District must be at least 3 characters')
        .max(35, 'District must be at most 35 characters')
        .trim()
        .required('District is required'),
    upazila: Yup.string()
        .min(3, 'Upazila must be at least 3 characters')
        .max(35, 'Upazila must be at most 35 characters')
        .trim()
        .required('Upazila is required'),
    city: Yup.string()
        .min(3, 'City must be at least 3 characters')
        .max(35, 'City must be at most 35 characters')
        .trim()
        .required('City is required')
});

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    division: '',
    district: '',
    upazila: '',
    city: ''
}

export interface iPhoneDetails {
    phoneNumber?: string;
    countryName?: string;
    phoneCode?: string;
}
const SignUpPage: React.FC = () => {
    let searchParams = useSearchParams();
    let [redirect, setRedirect] = useState(() => {
        try {
            let r = searchParams.get('redirect') || '/account';
            let url = new URL(r);
            return url.toString();
        } catch (error) {
            return '/search'
        }
    });
    const router = useRouter();
 
    let server_url = process.env.NEXT_PUBLIC_SERVER_ORIGIN;
    const [selectedDivisionID, setSelectedDivisionID] = useState<string>('');
    const [selectedDistrictID, setSelectedDistrictID] = useState<string>('');
    const [selectedUpazilaID, setSelectedUpazilaID] = useState<string>('');
    let [EnableDistrictSelect, setEnableDistricSelect] = useState<boolean>(false);
    let [EnableUpazilaSelect, setEnableUpazilaSelect] = useState<boolean>(false);
    let [EnableCitiesSelect, setEnableCitiesSelect] = useState<boolean>(false);
    let [districtList, setDistrictList] = useState<any[]>([]);
    let [upazilaList, setUpazilaList] = useState<any[]>([]);
    let [citiestList, setCitiesList] = useState<any[]>([]);
    let [divisions, setDivisions] = useState<any[]>([]);
    let [phoneDetails, setPhoneDetails] = useState<iPhoneDetails>({});

    // Initializing the Sign-up page and fetching Divisions
    useEffect(function (): void {
        async function starterFunction() {
            // Checking User Is Logged In Or Not
            try {
                let response = await AuthRequestClient.get(server_url + '/api/auth/is-authenticated', { giveDetails: true })
                switch (response.status) {
                    case 200:
                        console.log("Client : User Is Still Logged In , Making User Logged Out");
                        let res = await AuthRequestClient.post(server_url + '/api/auth/log-out', {}, { giveDetails: true });
                        if (res.status === 200) {
                            console.log("Client : User is Logged Out SuccessFully");
                        } else {
                            console.log("Client : Failed to Logged Out The user");
                        }
                        break;
                    case 401:
                        console.log("Client : User is not Logged In");
                        break;
                    default:
                        console.log("Client :Server Error in making user logged out");
                        break;
                }
            } catch (error) {
                console.log(error);
            }

            // Fetch Divisions
            try {
                let response = await AuthRequestClient.get(server_url + "/api/location/divisions", { giveDetails: true });
                if (response.status !== 200) throw "Divisions Request Failed";
                setDivisions(response.json.data)
            } catch (error) {
                router.push("/error/errors/server-not-connected")
            }
        }
        starterFunction()
    }, []);
    // fetch districts
    useEffect(function (): void {
        if (EnableDistrictSelect) {
            fetch(server_url + "/api/location/district?division_id=" + selectedDivisionID)
                .then(response => {
                    if (response.status !== 200) throw "Divisions Request Failed";
                    else return response.json()
                })
                .then(res => setDistrictList(res.data))
                .catch(error => {
                    router.push("/error/errors/server-not-connected")
                })
        }
    }, [selectedDivisionID]);

    // fetch upazilas
    useEffect(function (): void {
        if (EnableUpazilaSelect) {
            fetch(server_url + "/api/location/upazila?district_id=" + selectedDistrictID)
                .then(response => {
                    if (response.status !== 200) throw "Divisions Request Failed";
                    else return response.json()
                })
                .then(res => setUpazilaList(res.data))
                .catch(error => {
                    router.push("/error/errors/server-not-connected")
                })
        }
    }, [selectedDistrictID]);

    // fetch cities
    useEffect(function (): void {
        if (EnableCitiesSelect) {
            fetch(server_url + "/api/location/city?upazila_id=" + selectedUpazilaID)
                .then(response => {
                    if (response.status !== 200) throw "Divisions Request Failed";
                    else return response.json()
                })
                .then(res => setCitiesList(res.data))
                .catch(error => {
                    router.push("/error/errors/server-not-connected")
                })
        }
    }, [selectedUpazilaID]);

    interface IValues {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        password: string;
        division: string;
        district: string;
        upazila: string;
        city: string;
    }
    async function handleSubmit(values: IValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) {
        try {
            let body = {
                ...values,
                phoneDetails: {
                    phoneNumber: values.phone,
                    ...phoneDetails
                }
            };

            console.log('Form body : ', body);

            let res = await AuthRequestClient.post(process.env.NEXT_PUBLIC_SERVER_ORIGIN + "/api/auth/sign-up", body, {
                giveDetails: true
            });
            console.log(res.json);

            switch (res.status) {
                case 204:
                    errorToast("Account Already Exist , Please Login");
                    router.push("/sign-in?" + (new URLSearchParams({ redirect }).toString()))
                    break;
                case 201:
                    successToast("Account Created SuccessFully");
                    router.push("/otp-varification?" + (new URLSearchParams({ redirect }).toString()));
                    break;
                case 400:
                    if (res.json?.message) errorToast(res.json.message);
                    else errorToast("Unknown Server Error");
                    break;
                default:
                    errorToast("Unknown Server Error");
                    break;
            }

        } catch (error) {
            console.log(error);
            if (error instanceof TypeError) errorToast("Network Error , Please Check The network");
            if (typeof error === 'string') errorToast(error);

        } finally {
            setSubmitting(false)
        }
    }
    return (
        <React.Fragment>
            <Form
                title='Create Account'
                details='Join us to start shopping'
            >
                <Formik
                    initialValues={initialValues}
                    validationSchema={SignUpSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, errors, touched, setFieldValue, values }) => (
                        <FormikForm className="space-y-6 w-full">

                            {/* Inputs */}
                            <>
                                <InputBox
                                    title='First Name'
                                    name='firstName'
                                    type='text'
                                    placeholder='John'
                                    hasError={(errors.firstName && touched.firstName) ? true : false}
                                />

                                <InputBox
                                    title='Last Name'
                                    name='lastName'
                                    type='text'
                                    placeholder='Due'
                                    hasError={(errors.lastName && touched.lastName) ? true : false}

                                />

                                <InputBox
                                    title='Email Address'
                                    name='email'
                                    type='email'
                                    placeholder='Johndue@gmail.com'
                                    hasError={(errors.email && touched.email) ? true : false}
                                />



                                <PhoneInput
                                    name='phone'
                                    setValue={setFieldValue}
                                    hasError={!!(errors.phone && touched.phone)}
                                    setPhoneDetails={setPhoneDetails}
                                />

                                <PasswordInput
                                    title='Password'
                                    name='password'
                                    placeholder='*********'
                                    hasError={(errors.password && touched.password) ? true : false}
                                />
                            </>
                            {/* Select */}

                            <>
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <SelectBox
                                        name={'division'}
                                        title='Division'
                                        hasError={(errors.division && touched.division) ? true : false}
                                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                            const divisionName = e.target.value;
                                            setFieldValue("division", divisionName);
                                            setEnableDistricSelect(true);
                                            setEnableUpazilaSelect(false)
                                            setEnableCitiesSelect(false);
                                            setFieldValue("district", "");
                                            setFieldValue("upazila", "");
                                            setFieldValue("city", "");
                                            setSelectedDivisionID(divisions.find(element => element.name === divisionName).id)
                                        }}
                                        items={divisions}
                                    />
                                    <SelectBox
                                        name={'district'}
                                        title='District'
                                        hasError={(errors.district && touched.district) ? true : false}
                                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                            const districtName = e.target.value;
                                            setFieldValue("district", districtName);
                                            setEnableUpazilaSelect(true);
                                            setEnableCitiesSelect(false);
                                            setFieldValue("upazila", "");
                                            setFieldValue('city', '');
                                            setSelectedDistrictID(districtList.find(el => el.name == districtName).id)
                                        }}
                                        items={districtList}
                                        disabled={!EnableDistrictSelect}
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                                    <SelectBox
                                        name={'upazila'}
                                        title='Upazila'
                                        hasError={(errors.upazila && touched.upazila) ? true : false}
                                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                            const upazilaName = e.target.value;
                                            setFieldValue("upazila", upazilaName);
                                            setEnableCitiesSelect(true);
                                            setSelectedUpazilaID(upazilaList.find(el => el.name == upazilaName).id)
                                        }}
                                        items={upazilaList}
                                        disabled={!EnableUpazilaSelect}
                                    />
                                    <SelectBox
                                        name={'city'}
                                        title='City'
                                        hasError={(errors.city && touched.city) ? true : false}
                                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                            const cityName = e.target.value;
                                            setFieldValue("city", cityName);
                                        }}
                                        items={citiestList}
                                        disabled={!EnableCitiesSelect}
                                    />
                                </div>
                            </>

                            <AuthButton
                                submitName='Create Account'
                                submitingName='Creating Account'
                                isSubmitting={isSubmitting}
                            />

                            <div className="text-center mt-4">
                                <p className="text-sm text-gray-600">
                                    Already have an account?&nbsp;
                                    <Link href={`/sign-in?` + (new URLSearchParams({ redirect }).toString())} className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-150">
                                        Sign in
                                    </Link>
                                </p>
                            </div>

                        </FormikForm>
                    )}
                </Formik>
            </Form>
        </React.Fragment>
    )
}

export default SignUpPage
