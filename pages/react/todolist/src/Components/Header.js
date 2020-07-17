import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.header`
    padding:28px 32px;
    display:flex;
    align-items:center;
    h1{
        margin:0;
        font-size:36px;
        color:#e31048;
        font-weight:700;
        letter-spacing:2px;
    }
`;

function Header(){
    return(
        <>
            <HeaderBox>
                <h1>Today</h1>
            </HeaderBox>
        </>
    )
}

export default Header;