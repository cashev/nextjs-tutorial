import React from 'react';
import Header from '../organisms/header';
import Footer from '../organisms/footer';
import HomePageProducts from '../organisms/homepage-products';
import CarouselProducts from '../organisms/carousel-products';

interface HomeTemplateProps {
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
  carouselProducts: {
    imageUrl: string;
    altText: string;
    label: string;
  }[];
};

const HomeTemplate: React.FC<HomeTemplateProps> = ({ leftProduct, rightTopProduct, rightDownProduct, carouselProducts }) => {
  return (
    <>
      <Header />
      <main>
        <div>
          <div>
            <HomePageProducts
              leftProduct={leftProduct}
              rightTopProduct={rightTopProduct}
              rightDownProduct={rightDownProduct}
            />
          </div>
          <div>
            <CarouselProducts items={carouselProducts} />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default HomeTemplate;
