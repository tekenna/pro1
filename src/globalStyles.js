import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root{
    --purple: rgb(86, 78, 223);
    --pink: rgb(255, 97, 124);
    --neutral: rgb(240, 244, 255);
    --lavender: rgb(107, 109, 158);
    --dark: rgb(43, 0, 71);
    --border-color: rgb(240, 244, 255); 
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Nunito', sans-serif;
        text-decoration: none;
    }
    body{
        background: var(--neutral);
        color: white;
        font-size: 1rem;
    }
    a{
        color: inherit;
    }
    p{
        color: var(--lavender);
    }
    .sec_heading{
        font-size: 2.5rem;
        color: var(--purple);
    }
    .small_heading{
        font-size: 1.8rem;
        color: var(--purple);
    }
    @media screen and (max-width: 850px){
        .sec_heading{
            font-size: 2rem;
            color: var(--purple);
        }
        .small_heading{
            font-size: 1.3rem;
            color: var(--purple);
        }
    }
`

export default GlobalStyle