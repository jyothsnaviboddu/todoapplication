import React from "react";
import C from "./C.jsx";
function B(props)
{
    return <div className="border border-3 border-success p-4 m-4">
                <h1>B component</h1>
                <C val={props.val}/>
            </div>
}
export default B