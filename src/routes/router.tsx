import {createBrowserRouter} from "react-router-dom";
import Root from "./root";
import Menus from "../pages/Menus";
import React from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "menus",
        element: <Menus />,
      },
    ],
  },

]);