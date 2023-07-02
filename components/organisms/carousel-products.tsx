import React from 'react';
import ImageLabelCenterRight from '../molecules/image-label-center-right';

interface CarouselProductsProps {
  products: {
    imageUrl: string;
    altText: string;
    label: string;
  }[];
};

const CarouselProducts: React.FC<CarouselProductsProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <ImageLabelCenterRight key={index} imageUrl={item.imageUrl} altText={item.altText} label={item.label} />
      ))}
    </div>
  )
};

export default CarouselProducts;
