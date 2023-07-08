import React from 'react';
import HeadingWithTextAndImage from '../molecules/heading-with-text-and-image';

// TODO Linkがない

interface HomePageProductsProps {
  firstProduct: {
    image: string;
    productName: string;
    price: string;
  };
  secondProduct: {
    image: string;
    productName: string;
    price: string;
  };
  thirdProduct: {
    image: string;
    productName: string;
    price: string;
  };
};

const HomePageProducts: React.FC<HomePageProductsProps> = ({ firstProduct, secondProduct, thirdProduct }) => {
  return (
    <section className='lg:grid lg:grid-cols-6 lg:grid-rows-2'>
      <div className="lg:col-span-4 lg:row-span-2">
        <HeadingWithTextAndImage heading={firstProduct.productName} text={firstProduct.price} imageUrl={firstProduct.image} altText={firstProduct.productName} />
      </div>
      <div className="lg:col-span-2 lg:row-span-1">
        <HeadingWithTextAndImage heading={secondProduct.productName} text={secondProduct.price} imageUrl={secondProduct.image} altText={secondProduct.productName} />
      </div>
      <div className="lg:col-span-2 lg:row-span-1">
        <HeadingWithTextAndImage heading={thirdProduct.productName} text={thirdProduct.price} imageUrl={thirdProduct.image} altText={thirdProduct.productName} />
      </div>
    </section>
  );
}

export default HomePageProducts;
