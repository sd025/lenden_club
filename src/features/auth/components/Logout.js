import { useEffect } from "react";
import { selectLoggedInUser, signOutAsync } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

function Logout() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await dispatch(signOutAsync());

        // Display success toast
        toast.success("Logout successful!");
      } catch (error) {
        // Display error toast
        toast.error(error.message || "Logout failed. Please try again.");
        console.error("Logout failed", error);
      }
    };

    handleLogout();
  }, [dispatch]);

  // but useEffect runs after render, so we have to delay navigate part
  return <>{!user && <Navigate to="/login" replace={true}></Navigate>}</>;
}

export default Logout;
