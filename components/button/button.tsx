import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  color: 'red' | 'blue' | 'green';
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
  onClick: () => void;
};

const Button = ({
  children,
  color,
  size,
  disabled,
  onClick,
}: ButtonProps) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <button
      style={{
        backgroundColor: color,
        fontSize: size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px',
        padding: size === 'small' ? '5px 10px' : size === 'medium' ? '10px 20px' : '15px 30px',
        borderRadius: '4px',
        color: '#fff',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        border: 'none',
      }}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
