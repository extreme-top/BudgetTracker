import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle
`
    *{
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root
    {
        --primary-color: #007bff;
        --primary-color2: #057FFF;
        --primary-color3: #0A84FF;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --border-color: #2e344e;
        --background-light-color: #f1f1f1;
        --white-color: #fff;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191d2b;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
        }

    body{
        font-family: "Montserrat", sans-serif;
        // background-color: blue;
        font-size: 1rem;
        line-height: 1.6;
        overflow: hidden;
        color : rga(255, 255, 255, 0.75);
    }

    .error{
        color: red;
        aanimation: shake 0.5s ease-in-out;
        @keyframes shake{
            0%{
                transform: rotate(0deg);
            }
            25%{
                transform: rotate(5deg);
            }
            50%{
                transform: rotate(-5deg);
            }
            75%{
                transform: rotate(5deg);
            }
            100%{
                transform: rotate(0deg);
            }
    }

`;