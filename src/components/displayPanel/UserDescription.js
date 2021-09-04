import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../../providers/SearchUserProvider';

const StyledParagraph = styled.p`
  margin-top: 33px;
  font-size: 1.3rem;
  line-height: 25px;
  color: ${({ theme }) => theme.accountDescription};
`;

const UserDescription = () => {
  const { userGitHubData } = useContext(SearchContext);
  const { bio } = userGitHubData;

  const content = !bio
    ? `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
Quisque volutpat mattis eros.`
    : bio;

  return <StyledParagraph>{content}</StyledParagraph>;
};

export default UserDescription;
