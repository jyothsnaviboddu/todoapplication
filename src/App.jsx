import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import A from './Components/A.jsx'
import {myContext} from './Components/Mycontext.js'
import Employeeform from './Formhandling/Form.jsx'
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
  return <div>
            <Employeeform></Employeeform>
  </div> 
  
      
        
         
  
}

export default App
