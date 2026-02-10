import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import PrivateRoute from "./PrivateRoute";


import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
  path: "/",
  element: <Navigate to="/login" replace />,
},
  {
  element: <PrivateRoute />,
  children: [
    {
      path: "/home",
      element: <MainLayout />,
      children: [{ index: true, element: <Home /> }],
    },
  ],
},
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
