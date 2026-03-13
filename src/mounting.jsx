import React, { useEffect, useState } from "react";
function Pro()
{
    useEffect(()=>{
        console.log("HEllo Jyothsnavi")
        document.getElementById("i").innerText+="Hello harshitha"
    },[])
    return <div>
                <h1 id="i">Jyothsnavi</h1>
            
    </div>
}
export default Pro