// src/globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset e Padrões */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px; /* Fallback para browsers antigos */
    @media (max-width: 1080px) {
      font-size: 93.75%; /* 15px */
    }
    @media (max-width: 720px) {
      font-size: 87.5%; /* 14px */
    }
  }

  body {
    background: #f8f9fa; /* Um fundo suave para o corpo */
    -webkit-font-smoothing: antialiased;
    font-family: 'Open Sans', sans-serif;
  }

  body, input, textarea, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

    .leaflet-top,
  .leaflet-bottom {
    z-index: 999 !important; 
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export default GlobalStyle;
