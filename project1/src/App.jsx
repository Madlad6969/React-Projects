import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Nav from './assets/Component/Nav';
import Home from './assets/Component/Home';
import Detail from './assets/Component/Detail';
import Category from './assets/Component/Category';
import { useState } from 'react';
import Login from './assets/Component/Login';

function App() {

  let [search, setSearch] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  let router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Nav handleChange={handleChange} />
        <Login search={search} />
      </>
    },
    {
      path: "/home",   
      element: <>
        <Nav handleChange={handleChange} />
        <Home search={search} />
      </>
    },
    {
      path: "/detail/:id",
      element: <>
        <Nav handleChange={handleChange} />
        <Detail />
      </>
    },
    {
      path: "/category/:name",
      element: <>
        <Nav handleChange={handleChange} />
        <Category />
      </>
    },
    {
      path: "/login",
      element: <>
        <Nav />
        <Login />
      </>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
