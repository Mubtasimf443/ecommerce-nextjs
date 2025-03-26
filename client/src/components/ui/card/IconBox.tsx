/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IconBoxProps {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

const IconBox: FC<IconBoxProps> = ({ icon, title, description, link }) => {
  const content = (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="relative w-16 h-16 mb-4">
        <Image 
          src={icon} 
          alt={title} 
          fill 
          className="object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  if (link) {
    return (
      <Link href={link} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

export default IconBox;
