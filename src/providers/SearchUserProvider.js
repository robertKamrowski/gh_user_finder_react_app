import React, { createContext, useState } from 'react';
export const SearchContext = createContext();

const SearchUserProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [userGitHubData, setUserGitHubData] = useState({});
  const [firstTimeOpenApp, setFirstTimeOpenApp] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    else {
      const url = `https://api.github.com/users/${inputValue}`;
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            setFirstTimeOpenApp(false);
            setUserGitHubData({ errorMessage: 'No Results' });
            throw new Error('Error');
          }
        })
        .then((data) => {
          setUserGitHubData(data);
          setFirstTimeOpenApp(false);
        })
        .catch((error) => {
          console.log(error);
        });
      setInputValue('');
    }
  };

  const value = {
    inputValue,
    handleInputChange,
    handleFormSubmit,
    userGitHubData,
    firstTimeOpenApp,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchUserProvider;
