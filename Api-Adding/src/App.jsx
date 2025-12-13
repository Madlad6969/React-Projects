

import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AddStudent from './component/AddStudent';
import Card from './component/Card'; 
import UpdateStudent from './component/UpdateStudent';                             


function App() {
  
  let router=createBrowserRouter([
    {
      path:"/",
      element:<><AddStudent></AddStudent></>
    },
    {
      path:"/card",
      element:<><Card></Card></>

    },
    {
        path:"/edit/:id",
        element:<><UpdateStudent></UpdateStudent> </>
      }
    ])

  
  return(
  <>
  <RouterProvider router={router}></RouterProvider>
  </>
  )

}

export default App
