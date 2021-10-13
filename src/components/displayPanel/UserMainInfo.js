import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../../providers/SearchUserProvider';

const UserMainInfoWrapper = styled.div`
  min-width: 233px;
  width: 100%;
  height: 70px;
  display: flex;

  @media (min-width: 768px) {
    min-width: 334px;
    height: 117px;
    width: 100%;
    align-items: center;
  }
`;

const Img = styled.img`
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 117px;
    height: 117px;
  }
`;

const UserBasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-grow: 1;
  height: 70px;
  margin-left: 19px;

  @media (min-width: 768px) {
    height: 91px;
    margin-left: 41px;
  }

  @media (min-width: 1440px) {
    align-self: flex-start;
    justify-content: unset;
    position: relative;
    height: 69px;
  }
`;

const AccountName = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.accountName};

  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
`;

const AccountLink = styled.a`
  display: block;
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.blue};

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  @media (min-width: 1440px) {
    margin-top: 10px;
    font-size: 1.8rem;
  }
`;

const JoinDate = styled.p`
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.joinDate};

  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }

  @media (min-width: 1440px) {
    align-self: flex-end;
    position: absolute;
    top: 5px;
    right: 0;
  }
`;

const UserMainInfo = () => {
  const {
    userGitHubData: { avatar_url, name, html_url, login, created_at },
  } = useContext(SearchContext);

  const getUserJoinDate = () => {
    const date = new Date(created_at).toDateString();
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
