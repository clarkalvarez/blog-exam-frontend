import axios from "axios";

export const getUsersAPI = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};


export const getUserApi = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
