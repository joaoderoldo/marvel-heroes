import { createGlobalStyle } from "styled-components";
import Variables from "@/styles/variables";

const GlobalStyle = createGlobalStyle`
    ${Variables}

    *{
        box-sizing: border-box;
    }

    body {
        margin: 0;
        min-height: 100vh;
    }
`;

export { GlobalStyle };
