import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Recovery from "./components/Recovery.jsx";
import Reset from "./components/Reset.jsx";
import Profile from "./components/Profile.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import UserProfile from "./components/Form.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "recovery",
        element: <Recovery></Recovery>,
      },
      {
        path: "reset",
        element: <Reset />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "details",
        element: <UserProfile />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
