import React from "react";

function Counter() {
  const [count , setCount] = React.useState(0);
    
  return(
    <div className = "container">
      <h1>count</h1>
      <p className = "counter" >{count}</p>
      <div className="buttons">
        <button type="button" className="btn" onClick={()=> setCount(count -1)} >Decrease</button>
        <button type="button" className="btn" onClick={()=> setCount(0)} >reset</button>
        <button type="button" className="btn" onClick={()=> setCount(count +1)} >increase</button>

      </div>
    </div>
  )
}

export default Counter;
