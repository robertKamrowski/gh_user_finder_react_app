import React, { useContext } from 'react';
import styled from 'styled-components';
import UserMainInfo from './UserMainInfo';
import UserDescription from './UserDescription';
import AccountDetails from './AccountDetails';
import AccountLinks from './AccountLinks';
import { SearchContext } from '../../providers/SearchUserProvider';
import NoResults from './NoResults';

const MainPanelWrapper = styled.main`
  width: 100%;
  min-height: 17px;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.contentBackground};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  padding: 32px 24px 24px 24px;

  @media (min-width: 768px) {
    padding: 40px;
    min-height: 481px;
  }
`;

const MainPanel = () => {
  const { userGitHubData } = useContext(SearchContext);
  const { errorMessage } = userGitHubData;

  return (
    <MainPanelWrapper>
      {errorMessage ? (
        <NoResults />
      ) : (
        <>
          <UserMainInfo />
          <UserDescription />
          <AccountDetails />
          <AccountLinks />
        </>
      )}
    </MainPanelWrapper>
  );
};

export default MainPanel;
