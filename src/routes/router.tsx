import {createBrowserRouter} from "react-router-dom";
import Root from "./root";
import Navigations from "../pages/Navigations";
import React from "react";
import Cards from "../pages/Cards/Cards";
import ThreeD from "../pages/Cards/3D/3D";
import CardHover from "../pages/Cards/Hover/CardHover";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "menus",
        element: <Navigations />,
      },
      {
        path: "cards",
        element: <Cards />,
        children: [
          {
            path: "3d",
            element: <ThreeD/>
          },
          {
            path: "hover",
            element: <CardHover/>
          }
        ]
      },
    ],
  },

]);