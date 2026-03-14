import React from "react";
function useCounter()
{
    const[s,setS]=React.useState(0)
    function inc()
    {
        setS(s+1)
    }
    function dec()
    {
        setS(s-1)
    }
    return [s,inc,dec]
}
export default useCounter;