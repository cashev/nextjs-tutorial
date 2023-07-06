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
    <div className='relative w-full overflow-hidden bg-black dark:bg-white'>
      <div className='flex animate-carousel'>
        {[...items, ...items].map((item, index) => (
          <ImageLabelCenterRight key={index} imageUrl={item.imageUrl} altText={item.altText} label={item.label} />
        ))}
      </div>
    </div>
  )
};

export default CarouselProducts;
