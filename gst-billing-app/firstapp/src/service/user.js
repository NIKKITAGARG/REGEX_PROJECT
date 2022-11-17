import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL;

export const addUserData = (data) => {
  return axios.post(`/api/v1/users/add-user-data`, data);
};

export const getUserData = () => {
  return axios.get(`/api/v1/users/get-user-data`);
};
