import React from "react";
import { connect } from "react-redux";
import store from "./Store/store";
function Todolist(props)
{
    const [td,setTd]=React.useState("")
    console.log(props)
    return <div>
            <h3>Todolist</h3>
            <input type="text" onChange={(ev)=>{setTd(ev.target.value)}}/>
            <button
             onClick={()=>
            {
                props.dispatch(
                    {
                        type:"ADD",
                        payload:td
                    }
                )

            }}>AddTodo</button>
            <ul>
                {
                    props.todos.map((t,i)=>
                    {
                        return <li>{t}
                        <button onClick={()=>{
                            props.dispatch({
                                type:"DELETE",
                                payload:i
                            })
                        }}>Delete</button>
                        </li>
                    })
                }
            </ul>
    </div>
}
export default connect((store)=>{return store.todolistR})(Todolist)