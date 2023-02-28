import { createGlobalStyle } from "styled-components";
import background from "./background.png";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Lato', sans-serif;
        background-color: #575757;
        background-image: url("${background}");
        background-size: cover;
        background-position: center;
    }
`;