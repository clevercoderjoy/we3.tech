// src/services/api.js
import axios from "axios";

const API_URL = "https://reqres.in/api";

export const signIn = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const signUp = (email, password) => {
  return axios.post(`${API_URL}/register`, { email, password });
};

export const fetchUserData = (token) => {
  return axios.get(`${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
