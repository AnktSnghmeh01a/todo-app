import React, { useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { markComplete,deleteItem } from "../redux/todoSlice";


const TodoItem = ({id,title,completed})=>{

  const dispatch = useDispatch();
  const [isActive,setActive] = useState(false);

  const markCompleted=()=>{
    dispatch(markComplete({id,completed: !completed}))
    setActive(!isActive)
  }
   
  const deleteAction=()=>{
    dispatch(deleteItem({id}))
  }


 return(

  <>
    {isActive?(
      <li className="todo-item">
        <section className="item">
           <label className="input-name">
            <input type="checkbox" onClick={()=>{markCompleted()}}/>
           </label>
           <p>{title}</p>          
        </section>

        <section>
          <button
            className="delete-btn"
            onClick={()=>{
              deleteAction();
            }}
          >X</button>
        </section>
      </li>
    ):(
      <li className="todo-item">
      <section className="item">
        <label className="item-name">
          <input
            type="checkbox"
            onClick={() => {
              markCompleteds();
            }}
          />
          <div className="checkmark smooth-transition"></div>
        </label>
        <p>{title}</p>
      </section>
      <section>
        <button
          className="delete-btn"
          onClick={() => {
            deleteAction();
          }}
        >
          X
        </button>
      </section>
    </li>
    )
    }
  
  
  
  
  </>
 )

}

export default TodoItem;