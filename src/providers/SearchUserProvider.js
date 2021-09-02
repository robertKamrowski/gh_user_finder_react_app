import React, { createContext, useState } from 'react';
export const SearchContext = createContext();

const SearchUserProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const value = { inputValue, handleInputChange };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchUserProvider;
