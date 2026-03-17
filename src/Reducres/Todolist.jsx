import React, { useReducer } from "react";
import { todolistReducer } from "./Reducers";
function Todolist()
{
    const [state,dispatch]=useReducer(todolistReducer,{
        todos:[
            {
            title:'goto arunachalam',
            status:false,
            flag:0
             
             },
             {
                title:'goto penchalakona',
                status:false,
                flag:0
             }
            ,
            {
                title:'cr tho velli appalu thinali',
                status:false,
                flag:0
            }
            
        ]})
        function filtertodos(t)
        {
            console.log(t)
            if(r==='all')
            {
                return true;
            }
            if(r==='completed')
            {
                 if(t.status==true)
                 {
                      return true
                }  
           
            }
            if(r==='incompleted')
            {
                     if(t.status==false)
                  {
                        return true
                  }

            }   
           
        }
    const [ntd,setNtd]=React.useState("")
    const[ r,setR]=React.useState('all')
    return <div className="border border-4 border-success rounded bg-light m-5 p-4">
                <h3>Todolist</h3>
                <input type="text" onChange={(e)=>{setNtd(e.target.value)}} />
                <button
                 onClick={()=>
                {
                    dispatch({
                        type:'add',
                        payload:ntd
                    })

                }}>Addtodo</button>
                <br/>
                <input type="radio" name="category" value="all" onChange={(e)=>{setR(e.target.value)}}/>:all
                 <input type="radio" name="category" value="completed" onChange={(e)=>{setR(e.target.value)}}/>:completed
                  <input type="radio" name="category" value="incompleted" onChange={(e)=>{setR(e.target.value)}}/>:incompleted
                  <h3>radio:{r}</h3>
                <ul>
                    
                    {
                        state.todos.filter(filtertodos).map((t,i)=>
                        {
                            return  <li key={t.title} className={t.status?"text-decoration-line-through":"text-decoration-none"}>{t.title}
                            <button
                            onClick={()=>
                            {
                                
                                dispatch(
                                    {
                                        type:'del',
                                        payload:i

                                    }
                                )
                            }}
                            >Delete</button>
                            <button 
                                onClick={()=>{
                                    dispatch({
                                        type:"DONE",
                                        payload:i
                                    })
                                }} 
                            >
                                {t.flag==0?"Done":"Undone"}
                            </button>
                            </li>
                        })
                    }
                </ul>
          </div>    
}
export default Todolist