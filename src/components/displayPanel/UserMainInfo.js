import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../../providers/SearchUserProvider';

const UserMainInfoWrapper = styled.div`
  min-width: 233px;
  width: 100%;
  height: 70px;
  display: flex;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const UserBasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-grow: 1;
  height: 70px;
  margin-left: 19px;
`;

const AccountName = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.accountName};
`;

const AccountLink = styled.a`
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.blue};
  display: block;
`;

const JoinDate = styled.p`
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.joinDate};
`;

const UserMainInfo = () => {
  const { userGitHubData } = useContext(SearchContext);

  const { avatar_url, name, html_url, login } = userGitHubData;

  const getUserJoinDate = () => {
    const date = new Date(userGitHubData.created_at).toDateString();
    let date1 = date.split(' ');
    date1.splice(0, 1);
    return `Joined ${date1.join(' ')}`;
  };

  return (
    <UserMainInfoWrapper>
      <Img src={avatar_url} alt="User's avatar image." />
      <UserBasicInfoWrapper>
        <AccountName>{!name ? 'No account name' : name}</AccountName>
        <AccountLink target="_blank" href={html_url}>
          {`@${login}`}
        </AccountLink>
        <JoinDate>{getUserJoinDate()}</JoinDate>
      </UserBasicInfoWrapper>
    </UserMainInfoWrapper>
  );
};

export default UserMainInfo;
