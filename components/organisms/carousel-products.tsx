import React from 'react';
import ImageLabelCenterRight from '../molecules/image-label-center-right';

interface CarouselProductsProps {
  products: {
    image: string;
    productName: string;
  }[];
};

const CarouselProducts: React.FC<CarouselProductsProps> = ({ products }) => {
  return (
    <div className='relative w-full overflow-hidden bg-black dark:bg-white'>
      <div className='flex animate-carousel'>
        {[...products, ...products].map((product, index) => (
          <ImageLabelCenterRight key={index} imageUrl={product.image} altText={product.productName} label={product.productName} />
        ))}
      </div>
    </div>
  )
};

export default CarouselProducts;
