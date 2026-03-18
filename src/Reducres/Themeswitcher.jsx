import React, { useReducer } from "react";
import Counter from "./Counter";
import Todolist from "./Todolist";

function  themereducer(state,action)
{
    if(action.type==='light')
    {
        return {color:'my-box'}
    }  
    if(action.type==='dark')
    {
        return {color:'my-box1'}
    }  
    if(action.type==='blue')
    {
        return {color:"my-box2"}
    }
}

function Themeswitcher()
{
    const [color,dispatch]=useReducer(themereducer,{color:''})
    return  <div className="border-4 border border-dark  rounded">
             <div className={color.color} >
                    <h3>Hello jyothsnavi</h3>
                    <div className="d-flex">
                                <button  className="btn1"
                                onClick={()=>
                                {
                                    dispatch({
                                        type:'light'
                                    })

                                }}>
                                </button>
                                <button className="btn"
                                onClick={()=>
                                {
                                    dispatch({
                                        type:'dark'
                                    })

                                }}>
                                </button>
                                
                                <button className="btn2" 
                                onClick={()=>{
                                    dispatch({
                                        type:"blue"
                                    })
                                }}
                                ></button>            
                    </div>
                    <Counter/>
                    <Todolist/>

          </div>
          </div>
}
export default Themeswitcher