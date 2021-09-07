import React, { createContext, useState } from 'react';
export const SearchContext = createContext();

const SearchUserProvider = ({ children }) => {
  // * Controlled input component :
  const [inputValue, setInputValue] = useState('');
  const [userGitHubData, setUserGitHubData] = useState({});

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  // * _____________________________________________

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
            setUserGitHubData({ errorMessage: 'No Results' });
            throw new Error('Error');
          }
        })
        .then((data) => {
          setUserGitHubData(data);
        })
        .catch((error) => {
          console.log(error);
        });
      setInputValue('');
    }
  };

  // handle display entrance component:
  const [firstTimeOpenApp, setFirstTimeOpenApp] = useState(true);
  const handleCloseEntranceComponent = () => {
    setFirstTimeOpenApp((prevValue) => !prevValue);
  };

  const value = {
    inputValue,
    handleInputChange,
    handleFormSubmit,
    userGitHubData,
    firstTimeOpenApp,
    handleCloseEntranceComponent,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchUserProvider;
