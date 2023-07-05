import React, { useState } from 'react';
import InputText from '../atoms/input-text';
import SearchIcon from './search-icon';

const SearchForm: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // 検索処理を実行するなどの操作
    console.log('Search:', searchText);
  };

  const handleInputChange = (value: string) => {
    setSearchText(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit} className='relative m-0 flex w-full items-center border border-gray-200 bg-transparent p-0 dark:border-gray-500'>
      <InputText
        value={searchText}
        placeholder="Search for products..."
        onChange={handleInputChange}
      />
      <div className='absolute right-0 top-0 mr-3 flex h-full items-center'>
        <SearchIcon />
      </div>
    </form>
  );
};

export default SearchForm;
