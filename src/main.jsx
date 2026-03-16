import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter.jsx'
import Todolist from './Components/Features/Todolist/Todolist.jsx'
import Stopwatch from './Stopwatch.jsx'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Products from './Components/Products/Products.jsx'
import Product from './Components/Products/Productdetails.jsx'
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
             {
                 path:"/counter",
                 element:<Counter/>
               },
                {
                    path:"/todolist",
                    element:<Todolist></Todolist>
                },
                {
                    path:"/stopwatch",
                    element:<Stopwatch></Stopwatch>
                },
               {
                path:"/products",
                element:<Products></Products>,
               children:
               [
                   {
                path:"/products/:id",
                element:<Product></Product>,
                  },
               ],
            },
         ],
    },            
   
])

createRoot(document.getElementById('root')).render(
         <RouterProvider router={router}/>,
)