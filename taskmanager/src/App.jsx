import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Nav from './component/Nav';
import AddTask from './component/AddTask';
import Tasks from './component/Tasks';
;
  


function App() {
 let router=createBrowserRouter([
  {
    path:"/",
    element:<><Nav></Nav>,<AddTask></AddTask></>
  },
  {
    path:"/tasks",
    element:<><Nav></Nav>,<Tasks></Tasks></>

  }

 
  
 ])

  return (
    <>
<RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
