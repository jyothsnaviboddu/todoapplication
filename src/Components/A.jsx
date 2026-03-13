import React from "react";
import B from "./B.jsx";
import { myContext } from "./Mycontext.js";
function A()
{

    return <div className="border border-3 border-warning p-4 m-4">
                <h1>A component </h1>
                <B/>
            </div>
}
export default A