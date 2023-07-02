import React from 'react';
import { ImageProps as NextImageProps } from 'next/image';

const Image: React.FC<NextImageProps> = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
}

export default Image;
