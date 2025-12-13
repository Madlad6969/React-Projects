import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Card from './Components/Card';

function App() {

  const[todos ,setTodos]=useState([])
  
  async function fetchData() {
    try {
      let res=await fetch("https://jsonplaceholder.typicode.com/todos/");
      let data=await res.json();
      setTodos(data);

    } catch (error) {
      console.log(error);
      
    }

  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
    <div className="container">
      <div className="row">
   {todos.map(e=><Card data={e}></Card>)}
      </div>
    </div>
     
    </>
  )
}

export default App
