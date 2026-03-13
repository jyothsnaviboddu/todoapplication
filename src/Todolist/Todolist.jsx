import React, { useCallback, useEffect, useMemo, useRef } from "react";
import Todo from "./child.jsx";
function Todolist()
{
    const re=useRef()
    var [todo,setTodo]=React.useState([])
    const [n,setN]=React.useState("")
    useEffect(()=>{
        re.current.focus()
    },[])
    function addTodo()
    {
        setTodo((ctodos)=>
        {
            ctodos.push(n)
            return ([...ctodos])

        })
    }
  const del=useCallback(function(x)
    {
       setTodo((ctodos)=>{
            ctodos.splice(x,1)
            return [...ctodos]
       });

    },[]);
    const data=useMemo(()=>{
       return(
        {
            firstname:"Jyothsnavi",
             lastname:"Boddu"
        })
       
        
    },[])
    return <div className="border border-2 border-warning m-3 p-4">
                <input type="text" onChange={(e)=>{setN(e.target.value)}} ref={re}/>
                <button onClick={()=>addTodo()}>AddTodo</button>
                <ul>
                    {
                        todo.map((t,i)=>
                        {
                                return  <Todo key={t} to={t} in={i}  d={del}></Todo>
                                             
                        })
                    }
                </ul>
    </div>
}
export default Todolist;