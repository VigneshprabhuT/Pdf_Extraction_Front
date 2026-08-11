import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About"
import Contact from "../pages/Contact";
import Team from "../pages/Team";
import PdfExtractor from "../Pdf/PdfExtractor"
import Career from "../pages/Career";
import RetePlanDesign from "../pages/401k_reteriment/RetePlanDesign";
import RetePlanComplaince from "../pages/401k_reteriment/RetePlanComplaince";
import FiduciaryServices from "../pages/401k_reteriment/FiduciaryServices";

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
        {
          path: "/pdf-extraction",
          element: <PdfExtractor />,
        },
        {
          path: "/Careers",
          element: <Career />,
        },
        {
          path: "/retirement-plan-design",
          element: <RetePlanDesign />,
        },
        {
          path: "/retirement-plan-compliance",
          element: <RetePlanComplaince />,
        },
        {
          path: "/3(16)-fiduciary-services",
          element: <FiduciaryServices />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRouter;