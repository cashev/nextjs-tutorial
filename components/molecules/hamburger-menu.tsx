import React, { useState } from 'react';
import Button from '../atoms/button';
import HamburgerMenuIcon from './hamburger-menu-icon';
import SearchForm from './search-form';
import CloseIcon from './close-icon';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='block w-1/3 md:hidden'>
      <Button onClick={handleClick}>
        <HamburgerMenuIcon />
      </Button>

      {isOpen && (
        <div className='fixed top-0 left-0 h-screen w-screen bg-white z-40 shadow-lg transform transition-transform ease-in-out duration-300 -translate-x-0'>
          <div className='p-4'>
            <div className='mb-4'>
              <Button onClick={handleClick} >
                <CloseIcon />
              </Button>
            </div>
            <div className='mb-4 w-full'>
              <SearchForm />
            </div>
            <ul className='flex flex-col'>
              <li className='mb-4'>
                <a href='/search' className='rounded-lg py-1 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white'>All</a>
              </li>
              <li className='mb-4'>
                <a href='/search/shirts' className='rounded-lg py-1 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white'>Shirts</a>
              </li>
              <li className='mb-4'>
                <a href='/search/stickers' className='rounded-lg py-1 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white'>Stickers</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
