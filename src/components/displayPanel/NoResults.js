import React from 'react';
import styled from 'styled-components';
import errorIcon from '../../assets/search-error 1.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    color: #f74646;
    font-weight: bold;
  }

  p {
    color: ${({ theme }) => theme.accountName};
    font-size: 1.3rem;
    margin-top: 20px;
  }
`;

const ErrorImg = styled.img`
  display: block;
  width: 250px;
  margin-top: 30px;
`;

const NoResults = () => {
  return (
    <Wrapper>
      <h2>No Results Found</h2>
      <ErrorImg src={errorIcon} alt="Error icon" />
      <p>Make sure you've typed username correctly.</p>
    </Wrapper>
  );
};

export default NoResults;
