import React from "react"
function Counter()
{
    var [c,setC]=React.useState(0)
    function inc()
    {
        setC(c+1)
    }
     function dec()
    {
        setC(c-1)
    }
   
    return <div className="border border-success border-5 m-3 p-4">
                <h1>Count:{c}</h1>
                <button onClick={()=>{inc()}}>Increment</button>
                 <button onClick={()=>{dec()}}>Decrement</button>


           </div>
}
export default Counter