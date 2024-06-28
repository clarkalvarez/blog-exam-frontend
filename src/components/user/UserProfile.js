import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import "../../styles.css";

const UserProfile = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>User Profile</h2>
        <span>Welcome, {user?.name}</span>
      </div>
      <div>
        <p>
          <strong>Name:</strong> {user?.name}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Role:</strong> {user?.role?.name}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
