import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './Components/Calculator';


function App() {
  const [Count, SetCount] = useState(0)

  return (
   <>
   
   <h1 className='text-warning text-center mt-5'>My Calculator App</h1>
    <Calculator></Calculator>
    </>
   
    
  )
}

export default App
