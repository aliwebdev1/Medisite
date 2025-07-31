import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, userLoading } = useContext(AuthContext);
  if (userLoading) {
    return <p>Loading.........</p>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
