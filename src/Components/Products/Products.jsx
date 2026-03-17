import React from "react";
import { Link, Outlet ,NavLink} from "react-router-dom";
function Products()
{
    const [pr,setPr]=React.useState([])
    React.useEffect(()=>
    {
        fetch("https://dummyjson.com/products")
        .then(res=>res.json())
        .then((data)=>{
                console.log(data.products)  
                setPr([...data.products])
             })
    },[])
    return (<div className="d-flex ">
        <b>Productdetails</b>
        <ul className="list-unstyled">
            {
                (pr)?.map((a)=>{
                    return <li>
                        <NavLink 
                        to={`/products/${a.id}`}
                        className={({isActive})=>
                        {
                            return isActive
                            ?"bg-info text-light text-decoration-none"
                            :""

                        }}
                        >{a?.title}</NavLink>
                        </li>
                })
            }
        </ul>
        
            <Outlet/>
        
        
    </div>);
}
export default Products