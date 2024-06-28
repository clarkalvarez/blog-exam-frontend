import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserProfile from "./components/user/UserProfile";
import UsersList from "./components/user/UsersList";
import UpdateProfile from "./components/user/UpdateProfile";
import PrivateRoute from "./components/auth/PrivateRoute";
import { useSelector } from "react-redux";
import { selectUser } from "./features/auth/authSlice";

const App = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* <Route
            path="/profile"
            element={<PrivateRoute component={UserProfile} />}
          /> */}
          <Route
            path="/users"
            element={<PrivateRoute component={UsersList} />}
          />
          <Route
            path="/update-profile"
            element={<PrivateRoute component={UpdateProfile} />}
          />
          <Route
            path="/"
            element={<Navigate to={user ? "/profile" : "/login"} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
