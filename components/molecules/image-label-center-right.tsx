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
    <div>
      <Image src={imageUrl} alt={altText} />
      <Label>{label}</Label>
    </div>
  );
}

export default ImageLabelCenterRight;
