import React from 'react';
import HomeTemplate from '../template/home-template';

const firstProduct = {
  url: '/product/acme-t-shirt',
  image: 'https://loremflickr.com/1080/1080',
  productName: 'Acme T-Shirt',
  price: '$20.00 USD',
};

const secondProduct = {
  url: '/product/acme-cup',
  image: 'https://loremflickr.com/1080/1080',
  productName: 'Acme Cup',
  price: '$15.00 USD',
};

const thirdProduct = {
  url: '/product/acme-rainbow-sticker',
  image: 'https://loremflickr.com/1080/1080',
  productName: 'Acme Rainbow Sticker',
  price: '$4.00 USD',
};

const carouselProducts = [
  {
    url: '/product/acme-mug',
    image: 'https://loremflickr.com/1080/1080',
    productName: 'Acme Mug',
  },
  {
    url: '/product/acme-hoodie',
    image: 'https://loremflickr.com/1080/1080',
    productName: 'Acme Hoodie',
  },
  {
    url: '/product/acme-baby-onesie',
    image: 'https://loremflickr.com/1080/1080',
    productName: 'Acme Baby Onesie',
  },
  {
    url: '/product/acme-baby-cap',
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
