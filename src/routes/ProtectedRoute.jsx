import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // If user not logged in, redirect to signin page
  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // Otherwise, allow access
  return children;
};

export default ProtectedRoute;
