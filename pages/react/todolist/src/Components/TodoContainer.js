import React from 'react';
import styled from 'styled-components';

const TodoContainerBox = styled.div`
    background:#243226;
    width:512px;
    height:976px;
    margin:0 auto;
    border-radius:17px;
    box-shadow:0 0 10px rgba(38, 37, 40, 0.375);
    display:flex;
    flex-direction:column;
    position:relative;
`;

function TodoContainer({children}){
    return(
        <>
            <TodoContainerBox>{children}</TodoContainerBox>
        </>
    )
}

export default TodoContainer;