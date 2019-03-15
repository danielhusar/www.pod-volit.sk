import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Anton');

  body, html, #___gatsby, #___gatsby > div {
    margin: 0;
    padding: 0;
    height: 100%;
    min-height: 100%;
    display: flex;
    width: 100%;
    font-family: 'Anton', sans-serif;
    letter-spacing: 5px;
  }

  img {
    max-width: 80%;
  }
`;
