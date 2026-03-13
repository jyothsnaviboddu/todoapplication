import React, { useEffect } from "react";
function Update()
{
    const [x,setX]=React.useState(0)
    useEffect(()=>
    {
       // console.log("nenu upadte ayya")
        document.getElementById("f").innerText+="Nenu upadte ayuthunna"

    },[x])
    useEffect(()=>{
                document.getElementById("g").innerText+="nenu rerender avuthunaa"
    })
    return <div>
                <h1>Hello</h1>
                <button onClick={()=>setX(x+1)}> Click</button>
                <i id="f"></i>
                <b id="g"></b>
    </div>
}
export default  Update