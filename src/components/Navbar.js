import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/auth/authSlice";
import "../styles.css";

const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">My App</div>
      <ul className="navbar-links">
        {user ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            {user.role.name === "Admin" && (
              <li>
                <Link to="/users">Users</Link>
              </li>
            )}
            <li onClick={handleLogout}>Logout</li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
