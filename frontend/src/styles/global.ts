import { createGlobalStyle } from 'styled-components';
import Newspapel from '../assets/newspaper.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #e6e6e6 url(${Newspapel}) no-repeat top right;
  }

  body, input, button {
    font-family: "Roboto",sans-serif;
    font-size: 14px;
  }

  #root {
    margin: 0 auto;
    padding: 40px 20px;
    max-width: 960px;
  }





  .List {
    border: 1px solid #d9dddd;
  }

  .ListItemEven,
  .ListItemOdd {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ListItemEven {
    background-color: #f8f8f0;
  }
`;
