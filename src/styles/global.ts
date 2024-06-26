import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f1f1f1;
        --red: #e52e4d;
        --blue: #FF007F;
        --green: #33cc95;

        --blue-light: #FF69B4;

        --text-title: #363F5F;
        --text-body: #969cb3;

        --shape: #FFFFFF;

        accent-color: #D9EC05;

        ::selection {
            background-color: #F1F7B0;
        }

        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    html {
        @media (max-width: 1083px) {
            font-size: 93.75%; //15px
        }
        @media (max-widtg: 720px) {
            font-size: 87.5%;
        }
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
   
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`