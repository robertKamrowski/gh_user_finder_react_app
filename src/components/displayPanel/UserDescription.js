import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../../providers/SearchUserProvider';

const StyledParagraph = styled.p`
  margin-top: 33px;
  font-size: 1.3rem;
  line-height: 25px;
  color: ${({ theme }) => theme.accountDescription};

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-top: 24px;
  }

  @media (min-width: 1440px) {
    margin-top: -30px;
    margin-left: 154px;
  }
`;

const UserDescription = () => {
  const {
    userGitHubData: { bio },
  } = useContext(SearchContext);

  const content = !bio ? `This profile has no bio.` : bio;

  return <StyledParagraph>{content}</StyledParagraph>;
};

export default UserDescription;
