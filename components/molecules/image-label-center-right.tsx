import React from 'react';
import Image from 'next/image';

interface ImageLabelCenterRightProps {
  imageUrl: string;
  altText: string;
  label: string;
};

const ImageLabelCenterRight: React.FC<ImageLabelCenterRightProps> = ({ imageUrl, altText, label }) => {
  return (
    <div className='relative h-[30vh] w-1/2 flex-none md:w-1/3'>
      <Image src={imageUrl} alt={altText} className='h-full object-contain' sizes='33vw' width={1080} height={1080} style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent" }} />
      <div className='absolute inset-y-0 right-0 flex items-center justify-center'>
        <div className='inline-flex bg-white p-4 text-xl font-semibold text-black dark:bg-black dark:text-white'>
          {label}
        </div>
      </div>
    </div>
  );
}

export default ImageLabelCenterRight;
