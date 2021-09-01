import React from 'react';
import styled from 'styled-components';
import ThemeToggleButton from './ThemeToggleButton';

const StyledHeader = styled.header`
  width: 100%;
  height: 38px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${({ theme }) => theme.appTitle};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>devfinder</h1>
      <ThemeToggleButton />
    </StyledHeader>
  );
};

export default Header;
