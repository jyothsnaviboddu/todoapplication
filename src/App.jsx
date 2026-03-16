import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import A from './Components/A.jsx'
import {myContext} from './Components/Mycontext.js'
import Counter from './Counter.jsx'
import Todolist from './Todolist/Todolist.jsx'
import { Outlet ,Link,NavLink} from 'react-router-dom'
import Products from './Components/Products/Products.jsx'
import './App.css'

function App()
 {
  
  
  var c={
        firstname:"Jyothsnavi",
        lastname:"Boddu"
      }
  function abc()
  {
      alert("Hello Jyothsnavi....!")
  }
  var a="harshitha"
  return  <div>
          <NavLink
            to="/counter"
            className={({ isActive }) => {
              return isActive
                ? "bg-info text-light text-decoration-none"
                : "";
            }}
          >
            Counter
          </NavLink>
                  <br></br>
           <NavLink 
           to='/todolist' 
           className={({isActive})=>{
            return isActive
            ? "bg-success text-dark text-decoration-none"
            :""
           }}
           >
           Todolist
           </NavLink>
           <br/>
           <NavLink 
           to='/stopwatch'
           className={({isActive})=>
            {
                return isActive
                ?"bg-danger text-light text-decoration-none"
                :""

           }}>
            Stopwatch
           </NavLink>
           <br/>
           <NavLink 
                    to='/products'
                    className={({isActive})=>{
                        return isActive
                        ?"bg-warning text-light text-decoration-none"
                        :""
                    }}
           >
            Products
           </NavLink>
            <Outlet></Outlet>
           </div>     
         
          
  
      
        
         
  
}

export default App