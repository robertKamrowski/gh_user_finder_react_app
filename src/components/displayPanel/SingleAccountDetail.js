import React from 'react';
import styled from 'styled-components';

const AccountDetail = styled.div`
  flex-basis: 33.3%;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    height: 53px;
  }
`;

const Title = styled.h4`
  font-size: 1.1rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.ghInfoTitles};

  @media (min-width: 768px) {
    font-size: 1.3rem;
    line-height: 1.9rem;
  }
`;

const Numbers = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.ghInfoNumbers};

  @media (min-width: 768px) {
    font-size: 2.2rem;
    line-height: 3.3rem;
  }
`;

const SingleAccountDetail = ({ title, content }) => {
  return (
    <AccountDetail>
      <Title>{title}</Title>
      <Numbers>{content}</Numbers>
    </AccountDetail>
  );
};

export default SingleAccountDetail;
