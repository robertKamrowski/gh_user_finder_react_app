import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import theme from './styles/theme';

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
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;
