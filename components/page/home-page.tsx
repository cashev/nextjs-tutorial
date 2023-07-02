import React from 'react';
import HomeTemplate from '../template/home-template';

const leftProduct = {
  heading: 'Acme T-Shirt',
  text: '$20.00 USD',
  imageUrl: 'https://via.placeholder.com/1080x1080',
};

const rightTopProduct = {
  heading: 'Acme Cup',
  text: '$15.00 USD',
  imageUrl: 'https://via.placeholder.com/1080x1080',
};

const rightDownProduct = {
  heading: 'Acme Rainbow Sticker',
  text: '$4.00 USD',
  imageUrl: 'https://via.placeholder.com/1080x1080',
};

const carouselProducts = [
  {
    imageUrl: 'https://via.placeholder.com/1080x1080',
    altText: 'Acme Mug',
    label: 'Acme Mug',
  },
  {
    imageUrl: 'https://via.placeholder.com/1080x1080',
    altText: 'Acme Hoodie',
    label: 'Acme Hoodie',
  },
  {
    imageUrl: 'https://via.placeholder.com/1080x1080',
    altText: 'Acme Baby Onesie',
    label: 'Acme Baby Onesie',
  },
  {
    imageUrl: 'https://via.placeholder.com/1080x1080',
    altText: 'Acme Baby Cap',
    label: 'Acme Baby Cap',
  },
];

const HomePage: React.FC = () => {
  return (
    <HomeTemplate
      leftProduct={leftProduct}
      rightTopProduct={rightTopProduct}
      rightDownProduct={rightDownProduct}
      carouselProducts={carouselProducts}
    />
  )
}

export default HomePage;
