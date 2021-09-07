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
`;

const Img = styled.img`
  display: block;
  position: absolute;
  width: 20.05px;
  height: 20px;
  left: 16px;
  top: 20px;
`;

const Input = styled.input`
  position: absolute;
  height: 25px;
  left: 13.76%;
  top: calc(50% - 25px / 2 + 0.5px);
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
