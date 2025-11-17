import axios from "axios";

export const loginUser = async (email, password) => {
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/login`,
    { email, password }
  );
};
