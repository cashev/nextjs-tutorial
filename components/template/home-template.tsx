import React from 'react';
import Header from '../organisms/header';
import Footer from '../organisms/footer';
import HomePageProducts from '../organisms/homepage-products';
import CarouselProducts from '../organisms/carousel-products';

interface HomeTemplateProps {
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
  carouselProducts: {
    image: string;
    productName: string;
  }[];
};

const HomeTemplate: React.FC<HomeTemplateProps> = ({ firstProduct, secondProduct, thirdProduct, carouselProducts }) => {
  return (
    <>
      <Header />
      <main>
        <HomePageProducts
          firstProduct={firstProduct}
          secondProduct={secondProduct}
          thirdProduct={thirdProduct}
        />
        <CarouselProducts products={carouselProducts} />
        <Footer />
      </main>
    </>
  );
}

export default HomeTemplate;
