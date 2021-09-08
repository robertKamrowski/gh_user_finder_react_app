import React, { useContext } from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/icon-search.svg';
import { SearchContext } from '../../providers/SearchUserProvider';

const StyledForm = styled.form`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.contentBackground};
  margin: 36px 0 0 0;
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  position: relative;

  @media (min-width: 768px) {
    height: 69px;
  }
`;

const Img = styled.img`
  display: block;
  position: absolute;
  width: 20.05px;
  height: 20px;
  left: 16px;
  top: 20px;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 23px;
    left: 32px;
  }
`;

const Input = styled.input`
  position: absolute;
  height: 25px;
  left: 13.76%;
  top: calc(50% - 25px / 2);
  width: 184px;
  font-family: Space Mono;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 25px;
  color: ${({ theme }) => theme.toggleThemeButton};
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.toggleThemeButton};
  }

  @media (min-width: 768px) {
    width: 360px;
    top: calc(50% - 25px / 2);
    font-size: 1.8rem;
  }

  @media (min-width: 1440px) {
    left: 10.96%;
    width: 520px;
  }
`;

const Button = styled.button`
  position: absolute;
  display: block;
  left: 72.17%;
  top: 10.83%;
  width: 84px;
  height: 46px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue};
  border: none;
  color: #fff;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2.1rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #60abff;
  }

  @media (min-width: 768px) {
    width: 106px;
    left: 79.76%;
    top: 13.77%;
    height: 50px;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  @media (min-width: 1440px) {
    left: 84.11%;
  }
`;

const Form = () => {
  const { inputValue, handleInputChange, handleFormSubmit } =
    useContext(SearchContext);

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <Img src={searchIcon} alt="Search Icon" />
      <Input
        type="text"
        placeholder="Search GitHub Username"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button>Search</Button>
    </StyledForm>
  );
};

export default Form;
