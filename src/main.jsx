import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter.jsx'
import Todolist from './Todolist/Todolist.jsx'
import Stopwatch from './Stopwatch.jsx'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
const route=createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
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
    }
])

createRoot(document.getElementById('root')).render(

    <RouterProvider router={route}/>
  
)
