import React, { act, useReducer } from "react";
import { counterReducer } from "./Reducers";
function Counter()
{
    const [state,dispatch]=useReducer(counterReducer,{count:0})
    return <div className="border border-3 border-info p-3 m-4">
                <h2>Count:{state.count}</h2>
                <button
                 onClick={()=>
                    {
                        dispatch({type:'INC'})
                    }}>
                Increment</button>
                 <button
                 onClick={()=>
                    {
                        dispatch({type:'DEC'})
                    }}>
                Decrement</button>
                 <button
                 onClick={()=>
                    {
                        dispatch({type:'CLR'})
                    }}>
                Reset</button>
  
  
    </div>
}
export default Counter