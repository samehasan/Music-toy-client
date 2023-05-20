/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";

import Login from "../pages/Login/Login";
import Toygalarys from "../pages/Toygalarys/Toygalarys";
import ToygalaryDetails from "../pages/ToygalaryDetails/ToygalaryDetails";
import Register from "./../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layouts/Main/MainLayout";
import Home from "../pages/Home/Home";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import Blog from "../../src/pages/Blog/Blog";
import NotFound from "../pages/Notfound/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {path:"*",
      element:<NotFound></NotFound>,
    },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "toygalarys",
        element: <Toygalarys></Toygalarys>,
      },
      {
        path: "/addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/MyToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
     
      {
        path: "toygalarys/:id",
        element: (
          <PrivateRoute>
            <ToygalaryDetails></ToygalaryDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
