import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const[num,setNum]=useState(0)
  const [count, setCount] = useState(0)
 
  let handleSubmit=()=>{
    // eslint-disable-next-line no-empty
    for(let i=1;i<=1000000000;i++){

    }

    return num*num
    
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let ans=useMemo(()=>handleSubmit(),[num])
  console.log(ans);
  

  return (
    <>
<input type="number" onChange={(e)=>setNum(e.target.value)}/><br/><br/>
     <h1>the value is {ans}</h1>
     <h1>Count is {count}</h1>
     <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
    </>
  )
}

export default App
