import React from "react";
// redux
import TodoItem from "./TodoItem.jsx"
import { useSelector } from "react-redux";

const TodoList = ()=>{
const todos = useSelector((state)=>state.todos);

return(
  <ul className="todo-list">
   {
    todos.map((todo,id)=>(
      <TodoItem
        key={id}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}  
        />
    ))
   }
  </ul>
)





}
export default TodoList