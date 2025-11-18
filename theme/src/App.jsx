/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'
import './App.css'
import { Home } from './Component/Home'
export let themeContext=createContext()

function App() {
  const [color, setColor] = useState({
          "bgcolor":"white",
          "color":"black"
  })

  function changeColor(){
    if(color.bgcolor=="white"){
          setColor({"bgcolor":"black",
            "color":"white"
          })
    }
    else{
setColor({"bgcolor":"white",
  "color":"black"})
    }
  }

  return (
    <>
    <themeContext.Provider value={color}>
 <button onClick={()=>changeColor()}>Change Theme</button>
 <Home/>
    </themeContext.Provider>
    </>
  )
}

export default App
