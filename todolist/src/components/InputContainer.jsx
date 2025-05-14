import React from "react";

function Inputcontainer({inputVal,writeToDo,addToDo}) {
  return (
    <div className="input-container">
      <input type="text" value={inputVal} onChange={writeToDo}/>
      <button onClick={addToDo}>+</button>
    </div>
  );
}

export default Inputcontainer;
