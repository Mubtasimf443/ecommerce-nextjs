/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import { FC } from "react";


const AboutUsPage: FC = () => {
  return (
    <div className="bg-dark-primary text-dark-text-primary min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-8">
          <div className="w-full max-w-2xl mb-6">
            <img 
              src="/images/company-logo.png" 
              alt="Our Company" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-center">About Us</h1>
        </div>
        
        <div className="bg-dark-secondary p-8 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-6 text-dark-text-secondary">
            Founded in 2010, our company has been dedicated to providing exceptional services and solutions to our clients. 
            What started as a small team with big dreams has grown into a thriving organization with a global presence.
          </p>
          <p className="text-dark-text-secondary">
            Our journey has been marked by innovation, perseverance, and a commitment to excellence. 
            We believe in building lasting relationships with our clients and partners based on trust and mutual respect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-dark-secondary p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-dark-text-secondary">
              To empower businesses through innovative solutions that drive growth and success. 
              We are committed to delivering exceptional value to our clients while maintaining the highest standards of integrity and professionalism.
            </p>
          </div>
          
          <div className="bg-dark-secondary p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-dark-text-secondary">
              To be a global leader in our industry, recognized for our innovative approach, 
              exceptional service, and positive impact on the communities we serve.
            </p>
          </div>
        </div>
        
        <div className="bg-dark-secondary p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-dark-border rounded-lg">
              <h3 className="text-xl font-medium mb-2">Excellence</h3>
              <p className="text-dark-text-secondary">We strive for excellence in everything we do, constantly pushing boundaries and exceeding expectations.</p>
            </div>
            <div className="p-4 border border-dark-border rounded-lg">
              <h3 className="text-xl font-medium mb-2">Integrity</h3>
              <p className="text-dark-text-secondary">We conduct our business with honesty, transparency, and ethical practices.</p>
            </div>
            <div className="p-4 border border-dark-border rounded-lg">
              <h3 className="text-xl font-medium mb-2">Innovation</h3>
              <p className="text-dark-text-secondary">We embrace creativity and forward-thinking to develop cutting-edge solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage;
