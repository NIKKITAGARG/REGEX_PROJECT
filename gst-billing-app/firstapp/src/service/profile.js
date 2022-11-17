import axios from "axios";


const token = localStorage.getItem("token");

export const getProfile = () => {
  return axios({
    method: "get",
    headers: {
      "Content-Type": "application/json",
      auth: `Bearer ${token ? JSON.parse(token) : ""}`,
    },

    url: `/api/v1/profile/get-profile`,
  });
};


