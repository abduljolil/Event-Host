import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Authtication/Login";
import SignUp from "../Authtication/SingUp";
 
 
 
 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
         
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>

        },
     
      ]
    },
  
  ]);