/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react'

import './App.css'
import { createContext } from 'react'
import  A  from './Components/A'

export let countContext=createContext()

function App() {
  const [count, SetCount] = useState(90)
  const [name, SetName] = useState("react")

  return (
    <>
    <countContext.Provider value={[count,name]}>
      <A></A>
    </countContext.Provider>
    
    </>

  )
}

export default App
