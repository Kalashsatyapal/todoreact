import React from "react";
import ToDo from "./ToDo";

function todocontainer({todos,delTodo}) {
  return (
    <div className="container">
      {todos.map((todo,index)=>{
        return(
          <ToDo todo={todo} index={index} delTodo={delTodo}/>
        )
      })}
    </div>
  );
}

export default todocontainer;
