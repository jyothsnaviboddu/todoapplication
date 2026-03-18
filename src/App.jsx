import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import A from './Components/A.jsx'
import {myContext} from './Components/Mycontext.js'
import Counter from './Counterredux.jsx'
import Todolist from './Todolistredux.jsx'
import './App.css'

function App()
 {
   return  <div>
            <Counter/>
            <Todolist/>
   </div>
              
         
  
}

export default App
