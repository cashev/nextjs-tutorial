import React from 'react';
import Icon from '../atoms/icon';

const HamburgerMenuIcon: React.FC = () => {
  return (
    <Icon viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6">
      <path d="M4 6h16M4 12h16m-7 6h7"></path>
    </Icon>
  );
};

export default HamburgerMenuIcon;
