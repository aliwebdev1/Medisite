import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../Pages/Shared/Loading/Loading";
import { AuthContext } from "../../context/UserContext";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, userLoading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  if (userLoading || isAdminLoading) {
    return <Loading></Loading>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
