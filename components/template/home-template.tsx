import React from 'react';
import Header from '../organisms/header';
import Footer from '../organisms/footer';
import HomePageProducts from '../organisms/homepage-products';
import CarouselProducts from '../organisms/carousel-products';

interface HomeTemplateProps {
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
  carouselProducts: {
    url: string;
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
