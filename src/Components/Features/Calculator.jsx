import React, { useState } from "react";
function Calculator()
{
    function value(ec)
    {
        console.log(ec)
        setV(ec)
    }
    const[v,setV]=useState(0)
    return <div className="mybox">
                <div className="card">{v}</div>
                <div className="dis">
                    <button onClick={(e)=>{value(+(e.target.innerText))}}>1</button>
                    <button onClick={(e)=>{value(+(e.target.innerText))}} >2</button>
                    <button onClick={(e)=>{value(+(e.target.innerText))}}>3</button>
                    <button onClick={(e)=>{value(+(e.target.innerText))}}>4</button>
                    <button onClick={(e)=>{value(+(e.target.innerText))}}>5</button>
                    <button onClick={(e)=>{value(+(e.target.innerText))}}>6</button>
                    <button onClick={(e)=>{value(+(e.target.innerText))}}>7</button>
                    <button onClick={(e)=>{value(+(e.target.innerText))}}>8</button>
                    <button onClick={(e)=>{value(+(e.target.innerText))}}>9</button>
                    <button onClick={(e)=>{value(+(e.target.innerText))}}>0</button>
                    <button>+</button>
                    <button>-</button>
                    <button>*</button>
                    <button>/</button>
                    <button>%</button>
               
                    
                  
                </div>
    </div>
}
export default Calculator