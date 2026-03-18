import React from "react";
import { connect } from "react-redux";
import store from "./Store/store";
import { Addtodo, DeleteTodo } from "./Store/actions";
function Todolist(props)
{
    const [td,setTd]=React.useState("")
    //console.log(props)
    return <div className="border border-3 border-danger rounded m-3 p-2">
            <h3>Todolist</h3>
            <input type="text" onChange={(ev)=>{setTd(ev.target.value)}}/>
            <button
             onClick={()=>
            {
                props.addfn(td)
            }}>AddTodo</button>
            <ul>
                {
                    props.todos.map((t,i)=>
                    {
                        return <li key={t}>{t}
                        <button onClick={()=>
                        {
                            props.delfn(i) 
                        }}>Delete</button>
                        </li>
                    })
                }
            </ul>
    </div>
}
function mapStatetoprops(state)
{
    return state.todolistR
}
function mapDispatchtoprops(dispatch)
{
    return{
        addfn:(td)=>{
            dispatch(Addtodo(td))
        },
        delfn:(i)=>{
            dispatch(DeleteTodo(i))
        }


    }
  
 
}
export default connect(mapStatetoprops,mapDispatchtoprops)(Todolist)
//export default connect((store)=>{return store.todolistR})(Todolist)