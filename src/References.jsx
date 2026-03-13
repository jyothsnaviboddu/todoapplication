import React, { useEffect, useRef, useState } from "react";
import { useReducer } from "react";
function Use()
{
    var r=useRef()
    var c=useRef()
    var [s,setS]=useState("")
    var [z,setZ]=useState("")
    useEffect(()=>{
        r.current.focus()
    },[])
    function abc(x)
    {
        if(x.key==="Enter")
        {
            c.current.focus()
        }   
    }
    return <div>
                <input type="text" ref={r} onChange={(e)=>{setS(e.target.value)}} onKeyUp={(a)=>{abc(a)}}/>
                <h3>{s}</h3>
                <input type="text" ref={c} onChange={(e)=>{setZ(e.target.value)}}/>
                <h5>{z}</h5>
    </div>
}
export default Use