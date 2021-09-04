import React from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import Form from './formUserFinder/Form';
import SearchUserProvider from '../providers/SearchUserProvider';
import MainPanel from '../components/displayPanel/MainPanel';

const AppWrapper = styled.div`
  width: 327px;
  background-color: transparent;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <SearchUserProvider>
        <Form />
        <MainPanel />
      </SearchUserProvider>
    </AppWrapper>
  );
};

export default App;
