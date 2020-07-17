import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';
import {useListDispatch, useListNextId} from '../Context/Context';



const CircleButton = styled.button`
    background:#e31a48;
    &:hover{
        background:#f31c48;
    }
    &:active{
        background:#c31948;
    }
    z-index:5;
    cursor:pointer;
    width:80px;
    height:80px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    left:50%;
    bottom:20px;
    transform:translate(-50%,0);
    font-size:60px;
    color:#262626;
    border-radius:40px;

    border:none;
    outline:none;
    transition:0.125s all ease-in;
    ${props => props.open && css`
        background:#ff6b6b;
        &:hover{
            background:#ff8787;
        }
        &:active{
            background:#fa5252;
        }
        transform:translate(-50%,0) rotate(-45deg);
    `}
`;

const InsertFormBox = styled.div`
    width:100%;
    bottom:0;
    left:0;
    position:absolute;
`;

const InsertForm = styled.form`
    background:#232226;
    padding:32px 32px 152px;
    border-bottom-left-radius:16px;
    border-bottom-right-radius:16px;
`;

const Input = styled.input`
    padding:12px;
    border-radius:4px;
    border:1px solid #dee2e6;
    width:100%;
    outline:none;
    font-size:18px;
`;



function Create(){
    const [open,setOpen] = useState(false);
    const [value,setValue] = useState('');
    const dispatch = useListDispatch();
    const nextId = useListNextId();

    const onToggle = () => setOpen(!open);
    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text:value,
                done:false
            }
        });
        setValue('');
        setOpen(false);
        nextId.current += 1;
    }

    return(
        <>
            {open && (
                <InsertFormBox onSubmit={onSubmit}>
                    <InsertForm>
                        <Input placeholder="할 일을 입력해 주세요." autoFocus onChange={onChange} value={value}/>
                    </InsertForm>
                </InsertFormBox>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    )
}

export default Create;