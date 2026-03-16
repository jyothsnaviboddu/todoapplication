import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import A from './Components/A.jsx'
import {myContext} from './Components/Mycontext.js'
import Counter from './Counter.jsx'
import Todolist from './Components/Features/Todolist/Todolist.jsx'
import Calculator from './Components/Features/Calculator.jsx'
import { Outlet ,Link} from 'react-router-dom'
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
            <Link to='/counter'>Counter</Link>
            <br></br>
           <Link to='/todolist'>Todolist</Link>
           <br/>
           <Link to='/stopwatch'>Stopwatch</Link>
           <br/>
           <Link to='/products'>Products</Link>
            <Outlet></Outlet>
           </div>     
         
          
  
      
        
         
  
}

export default App
