import React, { useContext } from 'react';
import { SearchContext } from '../providers/SearchUserProvider';
import styled from 'styled-components';
import searchIcon from '../assets/icon-search.svg';

const PopupFormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(5px);
`;

const Form = styled.form`
  width: 327px;
  min-height: 200px;
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  background-color: ${({ theme }) => theme.background};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 500px;
    min-height: 300px;
  }
`;

const Img = styled.img`
  display: block;
  width: 30px;

  @media (min-width: 768px) {
    width: 40px;
  }
`;

const Input = styled.input`
  margin: 25px 0;
  display: block;
  font-family: 'Space Mono';
  width: 240px;
  padding: 8px 15px;
  border: none;
  font-size: 1.3rem;
  border-radius: 10px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  line-height: 25px;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: ${({ theme }) => theme.toggleThemeButton};
  }

  @media (min-width: 768px) {
    width: 300px;
    font-size: 1.8rem;
    margin: 45px;
  }
`;

const Button = styled.button`
  display: block;
  font-family: 'Space Mono';
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2.1rem;
  cursor: pointer;
  color: #fff;
  background-color: ${({ theme }) => theme.blue};
  border: none;
  width: 84px;
  height: 40px;
  border-radius: 10px;

  &:hover {
    background-color: #60abff;
  }

  @media (min-width: 768px) {
    width: 136px;
    height: 60px;
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
`;

const EntranceComponent = () => {
  const { handleFormSubmit, handleInputChange } = useContext(SearchContext);

  return (
    <PopupFormWrapper>
      <Form onSubmit={handleFormSubmit}>
        <Img src={searchIcon} alt="Search Icon" />
        <Input
          type="text"
          placeholder="Search GitHub Username"
          onChange={handleInputChange}
        />
        <Button>Search</Button>
      </Form>
    </PopupFormWrapper>
  );
};

export default EntranceComponent;
