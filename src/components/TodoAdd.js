import React from 'react';

const TodoApp = ({addTodo}) => {
    let todoValue = "";

    const submitButton = () =>{
        if(todoValue.trim()){
            addTodo(todoValue.trim());
        }
        todoValue="";
        document.getElementById("task").value="";
    }
    const updatedTodoValue = (e)=>{
      todoValue = e.target.value;

    }

    return (
        <div>
            <textarea id="task" onChange={updatedTodoValue}></textarea>
            <br/>
            <button id="btn" onClick={submitButton}>Add New</button>
        </div>
    );
};

export default TodoApp;