import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../features/auth/authSlice";
import { selectUser } from "../../features/auth/authSlice";
import "../../styles.css";

const UpdateProfile = () => {
  const user = useSelector(selectUser);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: "",
  });
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateProfile({ id: user.id, ...formData }));
      history.push("/profile");
    } catch (error) {
      console.error("Update profile error:", error.message);
    }
  };

  return (
    <div className="update-profile-container">
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Update Profile" />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
