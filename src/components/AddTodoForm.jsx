import React,{useState} from "react";
// Redux
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm=()=>{

const [value,setValue] = useState("");
const dispatch = useDispatch();

const onSubmit = (event) =>{
  event.preventDefault();
  if(value){
    dispatch(addTodo({title:value}))
  }
  setValue("")
}

return(
  <form onSubmit={onSubmit} className="form-input">
    <input 
     type="text"
     id="todo-input"
     placeholder="Create a new Todo..."
     value={value}
     onChange={(event)=>setValue(event.target.value)}      
    />
    <button type="submit" className="submit-button" >+</button>
  </form>
);

}

export default AddTodoForm;
