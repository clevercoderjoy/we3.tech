import axios from "axios";

const API_URL = "https://reqres.in/api";

export const signIn = async (email, password) => {
  console.log(email, password);
  const result = await axios.post(`${API_URL}/login`, { email, password });
  return result;
};

export const signUp = async (email, password) => {
  const result = await axios.post(`${API_URL}/register`, { email, password });
  return result;
};

export const fetchUserData = (token) => {
  return axios.get(`${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
