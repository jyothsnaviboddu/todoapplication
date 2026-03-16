import React, { memo, useEffect } from "react";
function Todo(props)
{
    console.log(props)
    useEffect(()=>{
        return ()=>{
                       console.log(props.to +"  deleted")   
                    }
    },[]);
    useEffect(()=>{
        console.log(props.to+"rerendered")
    })
  
    return <div className="border border-2 border-info m-3 p-2">
                <b>{props.to}</b>
                
                <button onClick={()=>{props.d(props.in)}} >Delete</button>

    </div>
}
export default memo(Todo);