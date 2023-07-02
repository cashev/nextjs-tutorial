import React from 'react';

interface LabelProps {
  children: React.ReactNode;
};

const Label: React.FC<LabelProps> = ({ children }) => {
  return <div >{children}</div>;
}

export default Label;
