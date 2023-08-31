import React from 'react';
import HeadingWithTextAndImage from '../molecules/heading-with-text-and-image';
import Link from 'next/link';

interface HomePageProductsProps {
  firstProduct: {
    url: string;
    image: string;
    productName: string;
    price: string;
  };
  secondProduct: {
    url: string;
    image: string;
    productName: string;
    price: string;
  };
  thirdProduct: {
    url: string;
    image: string;
    productName: string;
    price: string;
  };
};

const HomePageProducts: React.FC<HomePageProductsProps> = ({ firstProduct, secondProduct, thirdProduct }) => {
  return (
    <section className='lg:grid lg:grid-cols-6 lg:grid-rows-2'>
      <div className="lg:col-span-4 lg:row-span-2">
        <Link href={firstProduct.url}>
          <HeadingWithTextAndImage heading={firstProduct.productName} text={firstProduct.price} imageUrl={firstProduct.image} altText={firstProduct.productName} />
        </Link>
      </div>
      <div className="lg:col-span-2 lg:row-span-1">
        <Link href={secondProduct.url}>
          <HeadingWithTextAndImage heading={secondProduct.productName} text={secondProduct.price} imageUrl={secondProduct.image} altText={secondProduct.productName} />
        </Link>
      </div>
      <div className="lg:col-span-2 lg:row-span-1">
        <Link href={thirdProduct.url}>
          <HeadingWithTextAndImage heading={thirdProduct.productName} text={thirdProduct.price} imageUrl={thirdProduct.image} altText={thirdProduct.productName} />
        </Link>
      </div>
    </section>
  );
}

export default HomePageProducts;
