import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";

const PrivateRoute = ({ element: Element, adminOnly, ...rest }) => {
  const user = useSelector(selectUser);

  console.log(user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && user.role.name !== "Admin") {
    return <Navigate to="/profile" />;
  }

  return <Route {...rest} element={<Element />} />;
};

export default PrivateRoute;
