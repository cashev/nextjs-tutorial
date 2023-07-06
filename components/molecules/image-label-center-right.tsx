import React from 'react';
import Image from '../atoms/image';
import Label from '../atoms/label';

interface ImageLabelCenterRightProps {
  imageUrl: string;
  altText: string;
  label: string;
};

const ImageLabelCenterRight: React.FC<ImageLabelCenterRightProps> = ({ imageUrl, altText, label }) => {
  return (
    <div className='relative h-[30vh] w-1/2 flex-none md:w-1/3'>
      <Image src={imageUrl} alt={altText} className='h-full object-contain' />
      <div className='absolute inset-y-0 right-0 flex items-center justify-center'>
        <div className='inline-flex bg-white p-4 text-xl font-semibold text-black dark:bg-black dark:text-white'>
          {label}
        </div>
      </div>
    </div>
  );
}

export default ImageLabelCenterRight;
