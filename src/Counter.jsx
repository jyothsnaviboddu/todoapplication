import React from "react";
import useCounter from "./Components/Hooks/Counter";
function Counter()
{
    const [c,inc,dec]=useCounter()   
    return <div className="border border-success border-5 m-3 p-4">
                <h1>Count:{c}</h1>
                <button onClick={()=>{inc()}}>Increment</button>
                 <button onClick={()=>{dec()}}>Decrement</button>


           </div>
}
export default Counter