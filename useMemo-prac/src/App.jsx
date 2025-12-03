import { useCallback, useState } from 'react'

import './App.css'
import Temp from './component/Temp'

function App() {
  const [count, setCount] = useState(0)
  const[name,setName]=useState("")
  let greet=useCallback(()=>{
    console.log("hello");
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[name])

  return (
    <>
     <input type="text" onChange={(e)=>setName(e.target.value)}/>
     <Temp name={name} greet={greet}></Temp>
     <h1>count is {count}</h1>
     <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
    </>
  )
}

export default App
