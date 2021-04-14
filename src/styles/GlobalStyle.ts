import { createGlobalStyle } from 'styled-components';

import { ThemeType } from './theme'

interface Props {
    theme: ThemeType
}
const GlobalStyle = createGlobalStyle<Props>`
    *, *::after, *::before {
        box-sizing:border-box;
        margin: 0;
        outline:none;
        padding:0;
    }
    html{
        /* font-size:62.5%; */
    }
    body{
        font-size: 1rem;
        font-family: 'Roboto', 'sans-serif';
        line-height:1.5;
        background: ${({theme})=> theme.color.gray_900};
        color: ${({theme})=>theme.color.gray_200};
    }
    a{
        text-decoration: none;
        color:${({theme})=>theme.color.gray_600};
    }
    ul{
        list-style:none;
    }
`
export default GlobalStyle