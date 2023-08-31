import React from 'react';
import Image from 'next/image';
import Label from '../atoms/label';

interface HeadingWithTextAndImageProps {
  heading: string;
  text: string;
  imageUrl: string;
  altText: string;
};

const HeadingWithTextAndImage: React.FC<HeadingWithTextAndImageProps> = ({ heading, text, imageUrl, altText }) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden relative">
      <Image src={imageUrl} alt={altText} width={1080} height={1080} className='relative h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105' />
      <div className='absolute left-0 top-0 w-3/4 text-black dark:text-white'>
        <Label tagName='h3' className='inline bg-white box-decoration-clone py-3 pl-5 font-semibold leading-loose shadow-[1.25rem_0_0] shadow-white dark:bg-black dark:shadow-black text-3xl' text={heading} />
        <Label tagName='p' className='w-fit bg-white px-5 py-3 text-sm font-semibold dark:bg-black dark:text-white' text={text} />
      </div>
    </div>
  );
};

export default HeadingWithTextAndImage;
