import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", Open-Sans, Helvetica, Sans-Serif;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }

  .font-caveat {
    font-family: 'Caveat', cursive;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Scrollbar */
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-blue);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey);
  }

  /* Color */
  :root {
    --color-white: #ffffff;
    --color-black: #101010;
    --color-grey: #F2F2F2;
    --color-blue: #3496DD;
    --color-green: #34DD8C;
    --color-purple: #9334DD;  
    --color-muted: #C2C2C2;
  }

  /* Utility */
  .text-bold {
    font-weight: bold;
  }
`;

export default GlobalStyle;
