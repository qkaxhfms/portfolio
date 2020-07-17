import React from 'react';
import styled, {css} from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md';
import {useListDispatch} from '../Context/Context';


const Remove = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    color:#ab193b;
    font-size:24px;
    cursor:pointer;
    &:hover{
        color:#ff6b6b;
    }
    
    .removes{
        display: none;
    }
`;

const CheckCircle = styled.div`
    width:10px;
    height:10px;
    border-radius:50%;
    background:#ab183b;
    font-size:24px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    cursor:pointer;
`;

const Text = styled.div`
    flex:1;
    font-size:21px;
    color:#dcdcdc;
    ${props => props.done && css`
        color:#9e9ea0;
        text-decoration:line-through;
    `}
`;

const ItemBox = styled.li`
    display:flex;
    align-items:center;
    padding:0;
    height:48px;
    &:hover{
        ${Remove}{
            .done {
                display: none;
            }
            .removes{
                display: block;
            }
        }
    }
`;


function Item({id, done, text}){
    const dispatch = useListDispatch();
    const onToggle = () => dispatch({
        type:'TOGGLE',
        id
    });

    const onRemove = () => dispatch({
        type:'REMOVE',
        id
    });

    return(
        <ItemBox>
            <CheckCircle done={done} onClick={onToggle}/>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                {done && <MdDone className="done" />}
                <MdDelete className="removes" />
            </Remove>
        </ItemBox>
    )
}

export default Item;