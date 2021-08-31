import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  lightMode: {
    blue: '#0079FF',
    grey: '#697C9A',
    greyBlueish: '#4B6A9B',
    darkGrey: '#2B3442',
    lightGrey: '#F6F8FF',
    whitish: '#FEFEFE',
  },

  darkMode: {
    blue: '#0079FF',
    white: '#FFFFFF',
    blackish: '#F6F8FF',
    veryDarkBlue: '#1E2A47',
  },
};

const ThemeProviderWrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
