import React from "react";
function useTodolist()
{
    const[t,setTodo]=React.useState(["goto arunachalam","penchalakona"])
    function addTodo(todo)
    {
            t.push(todo)
            setTodo((t)=>{return [...t] })
    }
    return [t,addTodo]
}
export default useTodolist