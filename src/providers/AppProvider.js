import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';
import SearchUserProvider from '../providers/SearchUserProvider';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('lightTheme');

  const toggleTheme = () => {
    setThemeMode((prevTheme) => {
      if (prevTheme === 'lightTheme') return 'darkTheme';
      else return 'lightTheme';
    });
  };

  const value = { themeMode, toggleTheme };
  const selectedTheme = theme[themeMode];

  return (
    <AppContext.Provider value={value}>
      <ThemeProvider theme={selectedTheme}>
        <SearchUserProvider>
          <GlobalStyles />
          {children}
        </SearchUserProvider>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;
