/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


"use client"

import { FC } from 'react';
import IconBox from '@/components/ui/card/IconBox';

interface IconBoxesProps {
  className?: string;
}

const features = [
  {
    icon: 'https://img.icons8.com/ios/100/delivery--v1.png',
    title: 'Free Shipping',
    description: 'Free shipping on all orders over $50',
    link: '/shipping-policy'
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=15114&format=png&color=000000',
    title: 'Easy Returns',
    description: '30-day money back guarantee',
    link: '/return-policy'
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=74519&format=png&color=000000',
    title: 'Secure Payment',
    description: 'Your data is protected with us',
    link: '/payment-info'
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=11227&format=png&color=000000',
    title: '24/7 Support',
    description: 'Customer service available anytime',
    link: '/contact'
  }
];

const IconBoxes: FC<IconBoxesProps> = ({ className = '' }) => {
  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Why Shop With Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <IconBox
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconBoxes;
