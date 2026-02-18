import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../pages/forgotPassword/ForgotPass";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/Login/LoginPage";

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
      { index: true, element: <LoginPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },

  {
  path: "/forgot-password",
  element: <AuthLayout />,
  children: [{ index: true, element: <ForgotPassword /> }],
}

]);
