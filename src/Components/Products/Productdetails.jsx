import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
function Productdetails()
{
    
    var {id}=useParams()

    const [p,setP]=React.useState()
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>{
            
            setP({...data})
         
        })
    },[id])
        return <div className="border border-3 border-danger m-3 p-3 rounded w-50 h-50">
                    <h2>{p?.title}product details</h2>
                      <p>{}</p>
                    <img src={p?.thumbnail}/>
                  
                    
                </div>
}
export default Productdetails