import React from "react";
import { connect } from "react-redux";
import store from "./Store/store";
function Counter(props)
{
    console.log(props)
    return <div className="border border-4 border-warning m-3 p-3">
            <h2>Count:{props.count}</h2>
            <button 
            onClick={()=>
            {
                   props.dispatch({
                        type:'inc'
                    })
            }}  
            >Increment
            </button>
            <button 
            onClick={()=>
            {
                props.dispatch({
                    type:'dec'
                })

            }}>
                Decrement
            </button>
            <button onClick={()=>{
                props.dispatch({
                    type:"reset"
                })
            }}>
                Reset
            </button>
    </div>
}
export default connect((store)=>{ return store.countR})(Counter)