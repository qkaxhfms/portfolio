import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    body{
        background:#e31048;
        font-size:14px;
        padding:100px 0 0;
    }   

`;

export default GlobalStyles;