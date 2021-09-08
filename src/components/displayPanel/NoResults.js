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

  @media (min-width: 768px) {
    h2 {
      font-size: 2.5rem;
    }
    p {
      margin-top: 30px;
      font-size: 1.6rem;
    }
  }
`;

const ImgWrapper = styled.div`
  padding: 30px 20px;
  background-color: red;
  margin-top: 20px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.ghInfoBackground};
`;

const ErrorImg = styled.img`
  display: block;
  width: 250px;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

const NoResults = () => {
  return (
    <Wrapper>
      <h2>No Results Found</h2>
      <ImgWrapper>
        <ErrorImg src={errorIcon} alt="Error icon" />
      </ImgWrapper>
      <p>Make sure you've typed username correctly.</p>
    </Wrapper>
  );
};

export default NoResults;
