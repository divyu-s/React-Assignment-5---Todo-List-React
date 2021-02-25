import React from 'react';

const TodoItem = ({item,id,deleteTodo,isEditing,startEditing,finishEditing}) => {
    let todoValue = item.value;
    
   const changeTodoValue = (e) =>{
       todoValue = e.target.value;

   }

   const updateTodo = ()=>{
       if(todoValue.trim()){
            item.value = todoValue.trim();
            finishEditing(item);
       }
   }
    return (
                <li className="list" key={id}>{
                    isEditing ? (
                        <>
                        <textarea className="editTask" onChange={changeTodoValue} defaultValue={todoValue}></textarea>
                        <button className="saveTask" onClick={updateTodo}>Update Todo</button>
                        </>
                    ):
                    
                    (
                        <>
                        {item.value} (<a class="edit" href="#" onClick={()=>startEditing(id)}>Edit</a>|<a class="delete" href="#" onClick={()=>deleteTodo(id)}>Delete</a>)
                        </>
                        )

                }</li>
        
    

    );
};

export default TodoItem;