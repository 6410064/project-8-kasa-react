import React, { Fragment } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import NotFound from './pages/NotFound';
import './styles/App.scss';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

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
    {
      path: "/location/:id",
      element: <Location />
    }
  ]);


  return (
    <Fragment>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Fragment>
  );
}

export default App;
