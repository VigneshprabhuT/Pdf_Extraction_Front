import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About"
import Contact from "../pages/Contact";
import Team from "../pages/Team";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about-us",
          element: <About />,
        },
        {
          path: "/contact-us",
          element: <Contact />,
        },
        {
          path: "/executive-team",
          element: <Team />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRouter;