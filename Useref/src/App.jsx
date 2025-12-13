

import { useRef } from 'react'
import './App.css'

function App() {
let myref=useRef()
function handleClick(){
  console.log(myref.current.value)
  myref.current.focus()
  
}

  return (
    <>
      <h1></h1>
      <textarea ref={myref}></textarea>
      <br /><br />
      <button onClick={()=>handleClick()}>change</button>
    </>
  )
}

export default App



