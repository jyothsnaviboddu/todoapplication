import React, { useCallback, useEffect, useMemo, useRef } from "react";
import Todo from "./child.jsx";
import useTodolist from "../Components/Hooks/Todolist.js";
function Todolist()
{
    useEffect(()=>{
                re.current.focus()
    },[])
    const re=useRef()
    const[todo,addTodo]=useTodolist()
    const [n,setN]=React.useState("")
    return <div className="border border-2 border-warning m-3 p-4">
                <input type="text" onChange={(e)=>{setN(e.target.value)}} ref={re} />
                <button onClick={()=>addTodo(n)}>AddTodo</button>
                <ul>
                    {
                        todo.map((t)=>
                        {
                                return  <li>{t}</li>
                                             
                        })
                    }
                </ul>
    </div>
}
export default Todolist;