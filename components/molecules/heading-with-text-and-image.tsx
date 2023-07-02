import React from 'react';
import Image from '../atoms/image';

interface HeadingWithTextAndImageProps {
  heading: string;
  text: string;
  imageUrl: string;
  altText: string;
};

const HeadingWithTextAndImage: React.FC<HeadingWithTextAndImageProps> = ({ heading, text, imageUrl, altText }) => {
  return (
    <div>
      <Image src={imageUrl} alt={altText} />
      <h3 htmlFor="heading">{heading}</h3>
      <p htmlFor="text">{text}</p>
    </div>
  );
};

export default HeadingWithTextAndImage;
