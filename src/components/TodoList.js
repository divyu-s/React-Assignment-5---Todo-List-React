import React,{useEffect} from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todos,deleteTodo,startEditing,finishEditing}) => {
 
    return (
        <div>
            <ul>
                {todos.map((item,index)=>(
                  <TodoItem item={item} id={item.id} deleteTodo={deleteTodo} isEditing={item.isEditing} startEditing={startEditing} finishEditing={finishEditing}/>
                ))
               } 
            </ul>
        </div>
    );
};

export default TodoList;