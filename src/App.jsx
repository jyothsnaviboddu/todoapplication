import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import A from './Components/A.jsx'
import {myContext} from './Components/Mycontext.js'
import Counter from './Reducres/Counter.jsx'
import Todolist from './Reducres/Todolist.jsx'
import Themeswitcher from './Reducres/Themeswitcher.jsx'
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
  return  <myContext.Provider value={{c,a,abc}}>
        
          
            <Themeswitcher>
                </Themeswitcher>
                 
            
         </myContext.Provider>
          
  
      
        
         
  
}

export default App
