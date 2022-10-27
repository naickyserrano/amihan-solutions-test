import { createGlobalStyle } from "styled-components";

/**
 * Add all global styling (css)
 */
export default createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
    }

    html, 
    body, #root {
        height: 100%;
    }

    body {
        font-size: 16px;
        margin: 0;
        padding: 0;
    }
`;
