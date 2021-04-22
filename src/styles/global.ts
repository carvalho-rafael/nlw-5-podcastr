import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --white: #FFF;

        --gray-50: #F7F8FA;
        --gray-100: #E6E8EB;
        --gray-200: #AFB2B1;
        --gray-500: #808080;
        --gray-800: #494D4B;

        --green-500: #04D361;
        
        --purple-300: #9F75FF;
        --purple-400: #9164FA; 
        --purple-500: #8257E5;
        --purple-800: #6F48C9;

        --background: #f2f3f5;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
    }

    body, input, textarea, button {
        font: 500 1rem 'Titillium Web', sans-serif;
        color: var(--gray-800);
    }

    button {
        cursor: pointer;
    }
`