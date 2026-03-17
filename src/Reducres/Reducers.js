import { act } from "react";

export function counterReducer(state,action)
{
    if(action.type==='INC')
    {
        return {count:state.count+1}
    }  
     if(action.type==='DEC')
    {
        return {count:state.count-1}
    } 
     if(action.type==='CLR')
    {
        return {count:0}
    }    
}

 export function todolistReducer(state,action)
{
    
    if(action.type ==='add')
    {
        let todo={title:action.payload,status:false,flag:0}
         return { todos: [...state.todos, todo] };
             
    }
    if(action.type==='del')   
    {
        var temp=[...state.todos]
        temp.splice(action.payload,1)
        return {todos:[...temp]}
    }
    if(action.type==='DONE')
    {
        if(state.todos[action.payload].flag==0)
        {
            state.todos[action.payload].status=true;
            state.todos[action.payload].flag=1;
            console.log(state.todos)
            return{ todos:[...state.todos]}
        }
        else
        {
            state.todos[action.payload].status=false;
            state.todos[action.payload].flag=0;
            console.log(state.todos)
            return{ todos:[...state.todos]}
        }

       
    }
}