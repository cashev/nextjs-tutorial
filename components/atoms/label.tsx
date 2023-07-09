import React from 'react';

interface LabelProps {
  tagName: string;
  className?: string;
  text: string;
};

const Label: React.FC<LabelProps> = ({ tagName, className, text }) => {
  const Tag = tagName as keyof JSX.IntrinsicElements;
  return <Tag className={className} >{text}</Tag>;
}

export default Label;
