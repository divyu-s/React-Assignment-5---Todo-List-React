import React,{useState} from 'react';
import TodoList from "./TodoList.js";
import TodoAdd from "./TodoAdd";

const TodoContainer = () => {
    const [todos,setTodos] = useState([]);

    const getNewId = ()=>{
        let id = 0;
        todos.map((item)=>{
            if(item.id>id){
                id=item.id;
            }
            id+=1;
        })
        return id;
    }

    const addTodo = (newTodo)=>{
        const newTodoObj = {
            id:getNewId(),
            value:newTodo,
            isEditing:false,
        }
        const updated_todo = [...todos,newTodoObj];
        setTodos(()=>updated_todo);
        console.log(updated_todo)
        
    }

    const deleteTodo = (todoId) =>{
        console.log(todoId)
        const filterArr = todos.filter((item,index)=>(
             item.id!==todoId
        )
        )
        setTodos(filterArr);

    }
   const startEditing = (todoId)=>{
       const editing_arr = todos.map((item)=>{
           if(item.id===todoId){
               item.isEditing=true;
           }
           return item;
       }
       )
       setTodos(editing_arr);

   }

   const finishEditing = (todo)=>{
       console.log(todos)
       const editing_arr = todos.map((item)=>{
           if(item.id==todo.id){
               todo.isEditing = false;
               return todo;
           }
           return item;
       })
       console.log(editing_arr)
       setTodos(editing_arr)

   }

    return (
        <div>
            <h1>Todo App</h1>
            <TodoAdd addTodo={addTodo}/>
           <TodoList todos={todos} deleteTodo={deleteTodo} startEditing={startEditing} finishEditing={finishEditing}/>
        </div>
    );
};

export default TodoContainer;