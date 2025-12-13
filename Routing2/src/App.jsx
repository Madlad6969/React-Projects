import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import Login from './Component/Login';

let router=createBrowserRouter([

{
  path:"/",
  element:<><Nav></Nav><Home></Home></>
},{

  path:"/contact",
  element:<><Nav></Nav><Contact></Contact></>
},{

  path:"/about",
  element:<><Nav></Nav><About></About></>
},{
  path:"/login",
  element:<><Nav></Nav><Login></Login></>
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
