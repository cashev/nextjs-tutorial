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
    <form onSubmit={handleSubmit}>
      <InputText
        value={searchText}
        placeholder="Search for products..."
        onChange={handleInputChange}
      />
      <div>
        <SearchIcon />
      </div>
    </form>
  );
};

export default SearchForm;
