import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    h1 {
        font-size:32px;
    }
    h2 {
        font-size:28px;
    }
    h3 {
        font-size:24px;
    }
    h4 {
        font-size:20px;
    }
    h5 {
        font-size:16px;
    }
    html {
        /* font-size:16px; */
        background-color: #EFF9FD;

    }
    ul {
        list-style: none;
        padding-left: 0;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
    a:link{}
    a:visited{}
    a:hover{}
    button:disabled{
        pointer-events: none;
        cursor: not-allowed;
    }
`;
