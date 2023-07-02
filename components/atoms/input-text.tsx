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
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default InputText;
