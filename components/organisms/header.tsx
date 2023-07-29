import React, { useState } from 'react';
import Link from 'next/link';
import LogoIcon from '../molecules/logo-icon';
import SearchForm from '../molecules/search-form';
import CartButton from '../molecules/cart-button';
import HamburgerMenu from '../molecules/hamburger-menu';

const categories = [
  { "href": "/search", "text": "All" },
  { "href": "/search/shirts", "text": "Shirts" },
  { "href": "/search/stickers", "text": "Stickers" },
];

const Header: React.FC = () => {
  return (
    <nav className="relative flex items-center justify-between bg-white p-4 dark:bg-black lg:px-6">
      <HamburgerMenu />
      <div className='flex justify-self-center md:w-1/3 md:justify-self-start'>
        <div className='md:mr-4'>
          <LogoIcon />
        </div>
        <ul className='hidden md:flex md:items-center'>
          {categories.map((category, index) => (
            <li key={index}>
              <Link href={category.href} className='rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400'>
                {category.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='hidden w-1/3 md:block'>
        <SearchForm />
      </div>
      <div className='flex w-1/3 justify-end'>
        <CartButton />
      </div>
    </nav>
  );
};

export default Header;
