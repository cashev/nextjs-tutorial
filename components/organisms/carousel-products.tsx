import React from 'react';
import ImageLabelCenterRight from '../molecules/image-label-center-right';
import Link from 'next/link';

interface CarouselProductsProps {
  products: {
    url: string;
    image: string;
    productName: string;
  }[];
};

const CarouselProducts: React.FC<CarouselProductsProps> = ({ products }) => {
  return (
    <div className='relative w-full overflow-hidden bg-black dark:bg-white'>
      <div className='flex animate-carousel'>
        {[...products, ...products].map((product, index) => (
          <Link key={index} href={product.url} className='relative h-[30vh] w-1/2 flex-none md:w-1/3'>
            <ImageLabelCenterRight key={index} imageUrl={product.image} altText={product.productName} label={product.productName} />
          </Link>
        ))}
      </div>
    </div>
  )
};

export default CarouselProducts;
