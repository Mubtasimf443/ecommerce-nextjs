/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

"use client"
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import envStore from '@/_lib/store/envStore';
import "react-toastify/ReactToastify.css"
import { ToastContainer, toast ,Bounce} from 'react-toastify';




// Validation schema
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
    .min(11, 'Phone number must be 11 digits')
    .max(11, 'Phone number must be 11 digits')
    .trim()
    .required('Phone number is required'),
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

const SignUpPage: React.FC = () => {
  let server_url = (envStore()).server_url;
  const [selectedDivisionID, setSelectedDivisionID] = useState<string>('');
  const [selectedDistrictID, setSelectedDistrictID] = useState<string>('');
  const [selectedUpazilaID, setSelectedUpazilaID] = useState<string>('');
  let [EnableDistrictSelect, setEnableDistricSelect]=useState<boolean>(false);
  let [EnableUpazilaSelect, setEnableUpazilaSelect]=useState<boolean>(false);
  let [EnableCitiesSelect, setEnableCitiesSelect]=useState<boolean>(false);
  let [districtList, setDistrictList]=useState<any[]>([]);
  let [upazilaList, setUpazilaList]=useState<any[]>([]);
  let [citiestList, setCitiesList]=useState<any[]>([]);
  let [divisions , setDivisions ] =useState<any[]>([]);


  useEffect(function (): void {
    fetch(server_url + "/api/location/divisions")
      .then(response => {
        if (response.status !== 200) throw "Divisions Request Failed";
        else return response.json()
      })
      .then(res => setDivisions(res.data))
      .catch(error => {
        console.log(error)
        alert("Unknow serve error ")
      })
  }, []);

  useEffect(function (): void {
    if (EnableDistrictSelect) {
      fetch(server_url + "/api/location/district?division_id=" +selectedDivisionID )
      .then(response => {
        if (response.status !== 200) throw "Divisions Request Failed";
        else return response.json()
      })
      .then(res => setDistrictList(res.data))
      .catch(error => {
        console.log(error)
        alert("Unknow serve error ")
      })
    }
  }, [selectedDivisionID]);


  useEffect(function (): void {
    if (EnableUpazilaSelect) {
      fetch(server_url + "/api/location/upazila?district_id=" +selectedDistrictID )
      .then(response => {
        if (response.status !== 200) throw "Divisions Request Failed";
        else return response.json()
      })
      .then(res => setUpazilaList(res.data))
      .catch(error => {
        console.log(error)
        alert("Unknow serve error ")
      })
    }
  }, [selectedDistrictID]);


  useEffect(function (): void {
    if (EnableCitiesSelect) {
      fetch(server_url + "/api/location/city?upazila_id=" +selectedUpazilaID )
      .then(response => {
        if (response.status !== 200) throw "Divisions Request Failed";
        else return response.json()
      })
      .then(res => setCitiesList(res.data))
      .catch(error => {
        console.log(error)
        alert("Unknow serve error ")
      })
    }
  }, [selectedUpazilaID]);




  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      console.log('Form values:', values);

      const response = await fetch(server_url + "/api/auth/signUp", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.status !== 201 ) {
        console.log((await response.json()));
        throw new Error("Server error");
      }
      toast.success('Account created successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    } catch (error) {
      toast.error('Unknown error while creating the account', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-8 text-center">
          <h2 className="text-3xl font-bold text-white">Create Account</h2>
          <p className="mt-2 text-indigo-100">Join us to start shopping</p>
        </div>

        {/* Form */}
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            division: '',
            district: '',
            upazila: '',
            city: ''
          }}
          validationSchema={SignUpSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched, setFieldValue, values }) => (
            <Form className="px-6 py-8 space-y-6">
              {/* Personal Information */}
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* First Name */}
                  <div className="relative">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <Field
                      id="firstName"
                      name="firstName"
                      type="text"
                      className={`block w-full px-4 py-3 border-0 border-b-2 ${errors.firstName && touched.firstName ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-0 bg-gray-50 rounded-lg transition-all duration-200`}
                      placeholder="John"
                    />
                    <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs mt-1 absolute" />
                  </div>

                  {/* Last Name */}
                  <div className="relative">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <Field
                      id="lastName"
                      name="lastName"
                      type="text"
                      className={`block w-full px-4 py-3 border-0 border-b-2 ${errors.lastName && touched.lastName ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-0 bg-gray-50 rounded-lg transition-all duration-200`}
                      placeholder="Doe"
                    />
                    <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs mt-1 absolute" />
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="flex">
                    <span className={`inline-flex items-center px-3 rounded-l-md border border-r-0 ${errors.email && touched.email ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'} text-gray-500`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className={`block w-full rounded-none rounded-r-md px-4 py-3 border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500`}
                      placeholder="you@example.com"
                    />
                  </div>
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                {/* Phone */}
                <div className="relative" >
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="flex">
                    <span className={`inline-flex items-center px-3 rounded-l-md border border-r-0 ${errors.phone && touched.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'} text-gray-500`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </span>
                    <Field
                      id="phone"
                      name="phone"
                      type="tel"
                      className={`block w-full rounded-none rounded-r-md px-4 py-3 border ${errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500`}
                      placeholder="01XXXXXXXXX"
                    />
                  </div>
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                {/* Password */}
                <div className="relative">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="flex">
                    <span className={`inline-flex items-center px-3 rounded-l-md border border-r-0 ${errors.password && touched.password ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'} text-gray-500`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      className={`block w-full rounded-none rounded-r-md px-4 py-3 border ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500`}
                      placeholder="••••••••"
                    />
                  </div>
                  <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                  <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters</p>
                </div>

                {/* Location Fields */}
                <div className="pt-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Your Location</h3>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Division */}
                    <div className="relative">
                      <label htmlFor="division" className="block text-sm font-medium text-gray-700 mb-1">
                        Division
                      </label>
                      <Field
                        as="select"
                        id="division"
                        name="division"
                        className={`block w-full px-4 py-3 border ${errors.division && touched.division ? 'border-red-500' : 'border-gray-300'} bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 appearance-none`}
                        
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          const divisionName = e.target.value;
                          setFieldValue("division", divisionName);
                          setEnableDistricSelect(true) ;
                          setEnableUpazilaSelect(false)
                          setEnableCitiesSelect(false);
                          setFieldValue("district" ,"");
                          setFieldValue("upazila" ,"");
                          setFieldValue("city" ,"");
                          setSelectedDivisionID(divisions.find(element => element.name ===divisionName ).id )
                        }}
                      >
                        <option value="">Select Division</option>
                        {divisions.map(division => (
                          <option key={division.id} value={division.name}>
                            {division.name}
                          </option>
                        ))}
                      </Field>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <ErrorMessage name="division" component="div" className="text-red-500 text-xs mt-1" />
                    </div>

                    {/* District */}
                    <div className="relative">
                      <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                        District
                      </label>
                      <Field
                        as="select"
                        id="district"
                        name="district"
                        disabled={!EnableDistrictSelect}
                        className={`block w-full px-4 py-3 border ${errors.district && touched.district ? 'border-red-500' : 'border-gray-300'} bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 appearance-none ${!EnableDistrictSelect ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          const districtName = e.target.value;
                          setFieldValue("district" ,districtName);
                          setEnableUpazilaSelect(true);
                          setEnableCitiesSelect(false);
                          setFieldValue("upazila" ,"");
                          setFieldValue('city' , '');
                          setSelectedDistrictID(districtList.find(el => el.name ==districtName ).id)
                        }}
                      >
                        <option value="">Select District</option>
                        {districtList.map(district => (
                          <option key={district.id} value={district.name}>
                            {district.name}
                          </option>
                        ))}
                      </Field>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <ErrorMessage name="district" component="div" className="text-red-500 text-xs mt-1" />
                    </div>

                    {/* Upazila */}
                    <div className="relative">
                      <label htmlFor="upazila" className="block text-sm font-medium text-gray-700 mb-1">
                        Upazila
                      </label>
                      <Field
                        as="select"
                        id="upazila"
                        name="upazila"
                        disabled={!EnableUpazilaSelect}
                        className={`block w-full px-4 py-3 border ${errors.upazila && touched.upazila ? 'border-red-500' : 'border-gray-300'} bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 appearance-none ${!EnableUpazilaSelect ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          const upazilaName = e.target.value;
                         
                          setFieldValue("upazila" ,upazilaName);
                          setEnableCitiesSelect(true);
                          setSelectedUpazilaID(upazilaList.find(el => el.name == upazilaName ).id)
                        }}
                      >
                        <option value="">Select Upazila</option>
                        {upazilaList.map(upazila => (
                          <option key={upazila.id} value={upazila.name}>
                            {upazila.name}
                          </option>
                        ))}
                      </Field>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <ErrorMessage name="upazila" component="div" className="text-red-500 text-xs mt-1" />
                    </div>

                    {/* City */}
                    <div className="relative">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <Field
                        as="select"
                        id="city"
                        name="city"
                        disabled={!EnableCitiesSelect}
                        className={`block w-full px-4 py-3 border ${errors.city && touched.city ? 'border-red-500' : 'border-gray-300'} bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 appearance-none ${!EnableCitiesSelect ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                      >
                        <option value="">Select City</option>
                        {citiestList.map(city => (
                          <option key={city.id} value={city.id}>
                            {city.name}
                          </option>
                        ))}
                      </Field>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <ErrorMessage name="city" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-all duration-150 hover:scale-[1.02] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </div>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link href="/auth/sign-in" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-150">
                    Sign in
                  </Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
      />
    </div>
  );
};

export default SignUpPage;