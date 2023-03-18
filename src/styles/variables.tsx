import { css } from "styled-components";

const Variables = css`
  :root {
    font-family: var(---font-family, "Arial");
    font-weight: 400;
    font-size: 16px;

    color: var(--black, black);
    color-scheme: light dark;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    --black: #000;
    --white-color: #fff;
    --primary: #6dc6f8;
    --primary-dark: #247dd0;
    --secondary: #404040;
    --secondary-light: #565656;
    --bg-base: #f7f7f7;

    --font-family: "Epilogue", sans-serif;
  }
`;

export default Variables;
