/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

"use client"
import { useState } from "react";
import SectionHeading from "@/components/text/SectionHeading";
import Link from "next/link";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setSubmitMessage("Thank you for your message. We'll get back to you soon!");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setIsSubmitting(false);
        }, 1500);
    };
    
    return (
        <div className="bg-dark-primary text-dark-text-primary min-h-screen">
            <SectionHeading heading="Contact Us" subheading="Get in touch with our team" />
            
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <div className="bg-dark-secondary p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                        
                        {submitMessage && (
                            <div className="mb-4 p-3 bg-green-800 text-white rounded">
                                {submitMessage}
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-1 text-dark-text-secondary">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 bg-dark-primary border border-dark-border rounded focus:outline-none focus:ring-1 focus:ring-dark-accent"
                                />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-1 text-dark-text-secondary">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 bg-dark-primary border border-dark-border rounded focus:outline-none focus:ring-1 focus:ring-dark-accent"
                                />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="subject" className="block mb-1 text-dark-text-secondary">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 bg-dark-primary border border-dark-border rounded focus:outline-none focus:ring-1 focus:ring-dark-accent"
                                />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-1 text-dark-text-secondary">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full p-2 bg-dark-primary border border-dark-border rounded focus:outline-none focus:ring-1 focus:ring-dark-accent"
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-dark-accent text-dark-text-primary py-2 px-4 rounded hover:bg-opacity-90 transition-colors disabled:opacity-70"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                    
                    {/* Contact Information */}
                    <div>
                        <div className="bg-dark-secondary p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="text-dark-accent mr-3 mt-1">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Address</h4>
                                        <p className="text-dark-text-secondary">123 Shopping Street, Fashion District, City, Country</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-dark-accent mr-3 mt-1">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Phone</h4>
                                        <p className="text-dark-text-secondary">+1 (123) 456-7890</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-dark-accent mr-3 mt-1">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Email</h4>
                                        <p className="text-dark-text-secondary">contact@shopdark.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-dark-accent mr-3 mt-1">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Business Hours</h4>
                                        <p className="text-dark-text-secondary">Monday - Friday: 9am - 6pm</p>
                                        <p className="text-dark-text-secondary">Saturday: 10am - 4pm</p>
                                        <p className="text-dark-text-secondary">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Social Media Links */}
                        <div className="bg-dark-secondary p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                            
                            <div className="flex space-x-4">
                                <Link href="https://facebook.com" target="_blank" className="bg-dark-primary p-3 rounded-full text-dark-accent hover:bg-dark-accent hover:text-dark-text-primary transition-colors">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                                    </svg>
                                </Link>
                                
                                <Link href="https://instagram.com" target="_blank" className="bg-dark-primary p-3 rounded-full text-dark-accent hover:bg-dark-accent hover:text-dark-text-primary transition-colors">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                    </svg>
                                </Link>
                                
                                <Link href="https://twitter.com" target="_blank" className="bg-dark-primary p-3 rounded-full text-dark-accent hover:bg-dark-accent hover:text-dark-text-primary transition-colors">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                    </svg>
                                </Link>
                                
                                <Link href="https://youtube.com" target="_blank" className="bg-dark-primary p-3 rounded-full text-dark-accent hover:bg-dark-accent hover:text-dark-text-primary transition-colors">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Map */}
                <div className="mt-10 bg-dark-secondary p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316952784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1623338380320!5m2!1sen!2s"
                            width="100%" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
