import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import Form from './formUserFinder/Form';
import MainPanel from '../components/displayPanel/MainPanel';
import { SearchContext } from '../providers/SearchUserProvider';
import EntranceComponent from './EntranceComponent';

const AppWrapper = styled.div`
  width: 327px;

  @media (min-width: 768px) {
    width: 573px;
  }
`;

const App = () => {
  const { firstTimeOpenApp } = useContext(SearchContext);

  return (
    <AppWrapper>
      {firstTimeOpenApp ? <EntranceComponent /> : null}
      <Header />
      <Form />
      <MainPanel />
    </AppWrapper>
  );
};

export default App;
