import React from "react";
import { connect } from "react-redux";
import store from "./Store/store";
import { decAction, incAction, resetAction } from "./Store/actions";
function Counter(props)
{
    //console.log(props)
    return <div className="border border-4 border-warning m-3 p-3">
            <h2>Count:{props.count}</h2>
            <button 
            onClick={()=>
            {
                   props.incFn()
            }}  
            >Increment
            </button>
            <button 
            onClick={()=>
            {
                props.decFn()

            }}>
                Decrement
            </button>
            <button onClick={()=>{
                props.resetFn()
            }}>
                Reset
            </button>
    </div>
}
function mapStatetoProps(state)
{
    return state.countR
}
function mapDispatchtoprops(dispatch)
{
  return {
    incFn:()=>{
            dispatch(incAction())         
    },
    decFn:()=>
    {
        dispatch(decAction())
    },
    resetFn:()=>
    {
        dispatch(resetAction())
    }

  } 
}
export default connect(mapStatetoProps,mapDispatchtoprops)(Counter)
//export default connect((store)=>{ return store.countR})(Counter)