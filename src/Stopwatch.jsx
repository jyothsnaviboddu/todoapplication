import React, { useRef, useState } from "react";

function Stopwatch()
{
    const [sec,setSec]=React.useState(0)
    const [min,setMin]=React.useState(0)
    const [hour,setHour]=React.useState(0)
    let t=useRef()
    function handleplay()
    {
        t.current=setInterval(()=>
        {
                    setSec((s)=>
                    {
                        if(s==60)
                        {
                            setMin((m)=>
                            {
                               return m+1
                            })
                            return 0
                        }  
                        else
                        {
                                 return s+1
                        } 
                    })
        },1000)
    }
    function handlepause()
    {
        clearInterval(t.current)
    }
    function handleStop()
    {
        clearInterval(t.current)
        setHour(0)
        setMin(0)
        setSec(0)
    }
    return <div className="border border-3 border-info m-3 p-4">
                <h2>Stopwatch</h2>
                <h1>{hour}:{min}:{sec}</h1>
                <button onClick={()=>{handleplay()}}>Play</button>
                <button onClick={()=>{handlepause()}}>Pause</button>
                <button onClick={()=>{handleStop()}}>Stop</button>
             </div>
}
export default Stopwatch