import React, { useState } from 'react';

const SearchBar = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    handleSubmit(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type='text'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <input type='submit' value='Search' />
    </form>
  );
};

export default SearchBar;
