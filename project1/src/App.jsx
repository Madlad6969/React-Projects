
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Nav from './assets/Component/Nav';
import Home from './assets/Component/Home';
import Detail from './assets/Component/Detail';

import Category from './assets/Component/Category';
import { useState } from 'react';
import Login from './assets/Component/Login';


function App() {

  let[search,setSearch]=useState("")
  function handleChange(e){
    console.log(e.target.value);
    setSearch(e.target.value)
    
  }
let router=createBrowserRouter([
 
  {
    path: "/",
    element:<><Nav handleChange={handleChange}></Nav><Home search={search}></Home></>
  },{
    path:"/detail/:id",
    element:<><Nav handleChange={handleChange}></Nav><Detail></Detail></>
   },{
    path:"/category/:name",
    element:<><Nav handleChange={handleChange}></Nav><Category></Category></>
  },{
    path:"/login",
    element:<><Nav></Nav><Login></Login></>
  }


])

    

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
