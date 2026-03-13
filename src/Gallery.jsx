import React from "react";
var ar=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibg5f0fBrTxJSacQUfseRAN27xwQD9tId5Q&s",
        "https://images.stockcake.com/public/a/6/1/a61b1a1a-71f4-493b-ae11-2b1d6235f9c2_large/sunlit-blooming-flower-stockcake.jpg",
        "https://i.pinimg.com/videos/thumbnails/originals/34/b9/04/34b904216e0739ef539fb95b5a8ae500.0000000.jpg"
]
function Gallery()
{
    var[i,setI]=React.useState(0)
    function next()
    {
       
        if(i>=ar.length-1)
        {
            i=-1
        }
        else{
                 setI(i+1)
        }
    }
    function prev()
    {
        if(i<=0)
        {
            i=ar.length
        }
        else{
             setI(i-1)
 
        }
    }
    return <div className="border border-4 border-warning p-3 m-3 bg-warning ">
                <img src={ar[i]} />
                <br/>
                 <button onClick={()=>{prev()}}>Previous</button>
                   <button onClick={()=>{next()}}>Next</button>
                   


            </div>
}
export default Gallery