import React, { FC, ChangeEvent } from 'react';

interface InputTextProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const InputText: FC<InputTextProps> = ({ value, placeholder, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input className='w-full px-4 py-2 text-black dark:bg-black dark:text-gray-100'
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default InputText;
