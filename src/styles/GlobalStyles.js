import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`

${({ theme }) => css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
  }

  h1 {
    font-family: 'Space Mono';
    font-weight: bold;
    font-size: 2.6rem;
    line-height: 3.8rem;
  }
  h2 {
    font-family: 'Space Mono';
    font-weight: bold;
    font-size: 2.2rem;
    line-height: 3.3rem;
  }
  h3 {
    font-family: 'Space Mono';
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
  h4 {
    font-family: 'Space Mono';
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 2rem;
  }

  body {
    font-family: 'Space Mono';
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.background};
  }
`}

`;

export default GlobalStyles;
