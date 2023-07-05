import React from 'react';
import HeadingWithTextAndImage from '../molecules/heading-with-text-and-image';

// TODO Linkがない

interface HomePageProductsProps {
  leftProduct: {
    heading: string;
    text: string;
    imageUrl: string;
    altText: string;
  };
  rightTopProduct: {
    heading: string;
    text: string;
    imageUrl: string;
    altText: string;
  };
  rightDownProduct: {
    heading: string;
    text: string;
    imageUrl: string;
    altText: string;
  };
};

const HomePageProducts: React.FC<HomePageProductsProps> = ({ leftProduct, rightTopProduct, rightDownProduct }) => {
  return (
    <section className='lg:grid lg:grid-cols-6 lg:grid-rows-2'>
      <div className="lg:col-span-4 lg:row-span-2">
        <HeadingWithTextAndImage heading={leftProduct.heading} text={leftProduct.text} imageUrl={leftProduct.imageUrl} altText={leftProduct.altText} />
      </div>
      <div className="lg:col-span-2 lg:row-span-1">
        <HeadingWithTextAndImage heading={rightTopProduct.heading} text={rightTopProduct.text} imageUrl={rightTopProduct.imageUrl} altText={rightTopProduct.altText} />
      </div>
      <div className="lg:col-span-2 lg:row-span-1">
        <HeadingWithTextAndImage heading={rightDownProduct.heading} text={rightDownProduct.text} imageUrl={rightDownProduct.imageUrl} altText={rightDownProduct.altText} />
      </div>
    </section>
  );
}

export default HomePageProducts;
