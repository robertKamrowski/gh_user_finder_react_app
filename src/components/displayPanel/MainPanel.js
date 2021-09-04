import React from 'react';
import styled from 'styled-components';
import UserMainInfo from './UserMainInfo';
import UserDescription from './UserDescription';
import AccountDetails from './AccountDetails';
import AccountLinks from './AccountLinks';

const MainPanelWrapper = styled.main`
  width: 100%;
  min-height: 517px;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.contentBackground};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  padding: 32px 24px 48px 24px;
`;

const MainPanel = () => {
  return (
    <MainPanelWrapper>
      <UserMainInfo />
      <UserDescription />
      <AccountDetails />
      <AccountLinks />
    </MainPanelWrapper>
  );
};

export default MainPanel;
