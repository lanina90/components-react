import {createBrowserRouter} from "react-router-dom";
import Root from "./root";
import Navigations from "../pages/Navigations";
import React from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "menus",
        element: <Navigations />,
      },
    ],
  },

]);