import React, { useContext } from 'react';
import styled from 'styled-components';
import SingleAccountDetail from './SingleAccountDetail';
import { SearchContext } from '../../providers/SearchUserProvider';

const Wrapper = styled.div`
  height: 85px;
  width: 100%;
  background-color: ${({ theme }) => theme.ghInfoBackground};
  margin-top: 23px;
  border-radius: 10px;
  padding: 18.5px 14.5px;
  display: flex;

  @media (min-width: 768px) {
    margin-top: 32px;
    padding: 16px 32px;
  }
`;

const AccountDetails = () => {
  const { userGitHubData } = useContext(SearchContext);
  const { public_repos, followers, following } = userGitHubData;

  return (
    <Wrapper>
      <SingleAccountDetail title={'Repos'} content={public_repos} />
      <SingleAccountDetail title={'Followers'} content={followers} />
      <SingleAccountDetail title={'Following'} content={following} />
    </Wrapper>
  );
};

export default AccountDetails;
