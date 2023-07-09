import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/notfound",
      element: <NotFound />,
    },
  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
