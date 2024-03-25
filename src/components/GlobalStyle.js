import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: "Inter", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: var(--text);
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
  
    h1, h2 {
        margin: 0;  
    }
  
    p{
        margin: 0;
    }

    img {
        display: block;
        max-width: 100%; 
        height: auto; 
    }


`;