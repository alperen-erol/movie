import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Outlet />;
  } else {
    toastWarnNotify("You Must Be Logged In To See Details")
    return <Navigate to="/login" />;
  }
};

export default PrivateRouter;