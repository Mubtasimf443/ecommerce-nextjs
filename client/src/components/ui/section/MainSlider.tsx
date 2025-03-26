/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

"use client"

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SlideProps {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const slides: SlideProps[] = [
  {
    id: 1,
    image: '/images/banner1.jpg',
    title: 'New Collection',
    description: 'Discover our latest arrivals with up to 30% off',
    buttonText: 'Shop Now',
    buttonLink: '/shop/new-arrivals',
  },
  {
    id: 2,
    image:'/images/banner2.jpg',
    title: 'Summer Essentials',
    description: 'Everything you need for the season at special prices',
    buttonText: 'View Collection',
    buttonLink: '/shop/summer-collection',
  },
  {
    id: 3,
    image:'/images/banner3.jpg',
    title: 'Limited Edition',
    description: 'Exclusive products available for a limited time only',
    buttonText: 'Explore',
    buttonLink: '/shop/limited-edition',
  }
];

export const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-white mb-6 max-w-md">
                  {slide.description}
                </p>
                <Link
                  href={slide.buttonLink}
                  className="px-6 py-3 bg-dark-accent text-dark-text-primary rounded-md hover:bg-opacity-90 transition-colors"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-all"
        aria-label="Previous slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-all"
        aria-label="Next slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-dark-accent w-6' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainSlider;
