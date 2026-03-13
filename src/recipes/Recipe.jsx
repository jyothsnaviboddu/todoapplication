import React from "react";
function Rec(props)
{
    return <div className="my-box border border-2 p-3 rounded-5 m-2" style={{width:"20em", backgroundColor:"lightyellow"}}>
                <h3>{props.r.name}</h3>
                <br/>
                <img src={props.r.image} style={{width:"100px"}}/>
                </div>
}
export default Rec