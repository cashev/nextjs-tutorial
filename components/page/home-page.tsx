import React from 'react';
import HomeTemplate from '../template/home-template';

const firstProduct = {
  image: 'https://loremflickr.com/1080/1080',
  productName: 'Acme T-Shirt',
  price: '$20.00 USD',
};

const secondProduct = {
  image: 'https://loremflickr.com/1080/1080',
  productName: 'Acme Cup',
  price: '$15.00 USD',
};

const thirdProduct = {
  image: 'https://loremflickr.com/1080/1080',
  productName: 'Acme Rainbow Sticker',
  price: '$4.00 USD',
};

const carouselProducts = [
  {
    image: 'https://loremflickr.com/1080/1080',
    productName: 'Acme Mug',
  },
  {
    image: 'https://loremflickr.com/1080/1080',
    productName: 'Acme Hoodie',
  },
  {
    image: 'https://loremflickr.com/1080/1080',
    productName: 'Acme Baby Onesie',
  },
  {
    image: 'https://loremflickr.com/1080/1080',
    productName: 'Acme Baby Cap',
  },
];

const HomePage: React.FC = () => {
  return (
    <HomeTemplate
      firstProduct={firstProduct}
      secondProduct={secondProduct}
      thirdProduct={thirdProduct}
      carouselProducts={carouselProducts}
    />
  )
}

export default HomePage;
