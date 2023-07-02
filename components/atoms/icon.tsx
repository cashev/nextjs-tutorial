import React from 'react';

// TODO 各Iconの定義
interface IconProps {
  className?: string;
  ariaLabel?: string;
  viewBox?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
  children: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ className, ariaLabel, viewBox, fill, stroke, strokeWidth, strokeLinecap, strokeLinejoin, children }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      shapeRendering="geometricPrecision"
      className={className}
    >
      {children}
    </svg>
  );
};

export default Icon;
