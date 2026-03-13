import React from "react";
import { myContext } from "../Components/Mycontext";
function C()
{  
    var {a,c,abc}=React.useContext(myContext)
    //console.log(x)
    
    return <div className="border border-3 border-info p-4 m-4">
                <h1  >C component {a} </h1>
                <h2>{c.firstname}{c.lastname}</h2>
                <button onClick={()=>{abc()}}>Click me</button>
            </div>
}
export default C