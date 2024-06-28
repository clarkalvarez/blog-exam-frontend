import axios from "axios";

export const registerAPI = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/register",
      userData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const loginAPI = async (credentials) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/login",
      credentials
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const updateProfileAPI = async (userData) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/users/${userData.id}`,
      userData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
