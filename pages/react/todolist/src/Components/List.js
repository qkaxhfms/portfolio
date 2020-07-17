import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import {useListState} from '../Context/Context';

const ListContainer = styled.ul`
    flex:1;
    padding:15px 10px;
    overflow-y:auto;
`;


function List(){
    const todos = useListState();
    console.log(todos)
    return(
        <ListContainer>
            {todos.map(
                todo=><Item
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            )}
        </ListContainer>
    )
}

export default List;