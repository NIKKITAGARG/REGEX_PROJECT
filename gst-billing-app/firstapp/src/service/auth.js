import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL;
export const signUp = (data) => {
  console.log("inaxios");
  return axios.post(`/api/v1/auth/signUp`, data);
  
};

export const login = (data) => {
  return axios.post(`/api/v1/auth/login`, data);
};

// process.env.REACT_APP_BASE_URL