import React from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';

const AppWrapper = styled.div`
  width: 327px;
  background-color: transparent;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
    </AppWrapper>
  );
};

export default App;
