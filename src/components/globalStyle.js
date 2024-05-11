import { createGlobalStyle } from 'styled-components';
import backgroundImage from './img/photo.jpeg'


const globalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
  }
`;

export default globalStyle;
