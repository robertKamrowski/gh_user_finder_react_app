import React, { useContext } from 'react';
import { AppContext } from '../../providers/AppProvider';
import styled from 'styled-components';
import sun from '../../assets/icon-sun.svg';
import moon from '../../assets/icon-moon.svg';

const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.toggleThemeButton};
  width: 78px;
  height: 20px;
  text-transform: uppercase;
  background-color: transparent;
  outline: 0;
  border: 0;
  cursor: pointer;

  span {
    letter-spacing: 1px;
    font-family: ${({ theme }) => theme.font};
  }
`;

const ThemeToggleButton = () => {
  const { themeMode, toggleTheme } = useContext(AppContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <StyledButton onClick={handleToggleTheme}>
      <span>{themeMode === 'lightTheme' ? 'dark' : 'light'}</span>
      <img src={themeMode === 'lightTheme' ? moon : sun} alt="Sun icon" />
    </StyledButton>
  );
};

export default ThemeToggleButton;
