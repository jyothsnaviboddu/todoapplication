import React from "react";
import Rec from "./Recipe.jsx"
function Recipes()
{
    const[recipes,setRecipess]=React.useState([])
    React.useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
        .then((re)=> re.json() )
         .then((data)=>{
                console.log(data.recipes)
                setRecipess([...data.recipes])
        })
    },[])
    return <div className="border border-warning border-4">
                <ul className="d-flex flex-wrap border border-2 p-3 m-4 justify-content-evenly">
                    {
                        recipes.map((a)=>{
                            return <Rec r={a}></Rec>
                        })
                    }
                </ul>
    </div>
}
export default Recipes