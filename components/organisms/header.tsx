import React from 'react';
import Link from 'next/link';
import LogoIcon from '../molecules/logo-icon';
import CartIcon from '../molecules/cart-icon';
import SearchForm from '../molecules/search-form';

const categories = [
  {"href": "/search", "text": "All"},
  {"href": "/search/shirts", "text": "Shirts"},
  {"href": "/search/stickers", "text": "Stickers"},
];

const Header: React.FC = () => {
  return (
    <nav className="relative flex items-center justify-between bg-white p-4 dark:bg-black lg:px-6">
      <LogoIcon />
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link href={category.href}>
              {category.text}
            </Link>
          </li>
        ))}
      </ul>
      <SearchForm />
      <CartIcon />
    </nav>
  );
};

export default Header;
