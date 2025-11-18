import {useState } from 'react'
import PasswordApp from "./Components/PasswordApp"
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {
const [Count, SetCount] = useState(0);
  return (
    <>
    
   <h1 style={{ color: "black" }}>Password Generator</h1>
     <PasswordApp></PasswordApp>
     
    </>
  )
}

export default App
