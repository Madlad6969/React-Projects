import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Nav from './component/Nav';
import AddTask from './component/AddTask';
import Tasks from './component/Tasks';
import UpdateTask from './component/UpdateTask';
import Completed from './component/Completed';
import Login from './component/Login';
;
  


function App() {
 let router=createBrowserRouter([
  {
    path:"/addtask",
    element:<><Nav></Nav>,<AddTask></AddTask></>
  },
  {
    path:"/tasks",
    element:<><Nav></Nav>,<Tasks></Tasks></>

  },{
    path:"/edit/:id",
    element:<><Nav></Nav>,<UpdateTask></UpdateTask></>
  },{
    path:"/completed",
    element:<><Nav></Nav>,<Completed></Completed></>
  },{
    path:"/",
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
