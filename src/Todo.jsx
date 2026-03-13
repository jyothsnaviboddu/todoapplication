import React from "react";
var ar=[]
function Todo()
{
    var [i,setI]=React.useState(0)
    function add()
    {
        var c=document.getElementById("in").value
        ar.push(c)
        setI(i+1)
        
    }
    return <div className="border border-info p-4 m-3 rounded-5 border-4">
                <h3>TodoList</h3>
                <input type="text" id="in"/>
                <button onClick={()=>{add()}}>Addtodo</button>
                <ul>
                    {
                        ar.map((a)=>{
                                return <li>{a}</li>
                        })
                    }
                

                    
                    
                </ul>
          </div>
}
export default Todo