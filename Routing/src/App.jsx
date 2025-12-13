import { useState } from 'react'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Component/Nav'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './component/Home'
// import About from './component/About'
import Contact from './component/Contact'
import Service from './component/Service'
import Detail from './Component/Detail'
import Dashboard from './Component/Dashboard';
import Student from './Component/Student';
import Teacher from './Component/Teacher';
let About=React.lazy(()=>import('./component/About'))

let router=createBrowserRouter([
{
  path:"/",
  element:<><Nav></Nav><Home></Home></>
},

{

   path:"/about",
    element:<><Nav></Nav><About></About></>


},
{
    path:"/service",
   element:<><Nav></Nav><Service></Service></>
},{

     path:"/contact",
    element:<><Nav></Nav><Contact></Contact></>
},{

  path:"/detail/:id",
  element:<><Nav></Nav><Detail></Detail></>
} ,

{
  path:"/dashboard/",
  element:<Dashboard></Dashboard>,
  children:[
    {
      path:"student",
      element:<Student></Student>
    },
    {
      path:"teacher",
      element:<Teacher></Teacher>
    }
  ]
}

])

function App() {
   const [Count, SetCount] = useState(0)


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
