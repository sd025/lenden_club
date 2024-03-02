import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Protected from "./features/auth/components/Protected";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkAuthAsync,
  selectLoggedInUser,
  selectUserChecked,
} from "./features/auth/authSlice";
import PageNotFound from "./pages/404";
import UserProfilePage from "./pages/UserProfilePage";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import Logout from "./features/auth/components/Logout";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Toaster } from "react-hot-toast";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <UserProfilePage></UserProfilePage>{" "}
      </Protected>
    ),
  },
  {
    path: "/logout",
    element: <Logout></Logout>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const userChecked = useSelector(selectUserChecked);

  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      // we can get req.user by token on backend so no need to give in front-end
      dispatch(fetchLoggedInUserAsync());
    }
  }, [dispatch, user]);

  return (
    <>
      <div className="App">
        <div>
          <Toaster
            position="top-center"
            toastOptions={{
              success: {
                theme: {
                  primary: "#4aed88",
                },
              },
            }}
          ></Toaster>
        </div>
        {userChecked && (
          <Provider template={AlertTemplate} {...options}>
            <RouterProvider router={router} />
          </Provider>
        )}
        {/* Link must be inside the Provider */}
      </div>
    </>
  );
}

export default App;
