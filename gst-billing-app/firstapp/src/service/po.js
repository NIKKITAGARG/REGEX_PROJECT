import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("token");
export const addPoDetails = (data) => {
  console.log("inside addpoaxios")
  return axios({
    method: "post",
    headers: {
      "Content-Type": "application/json",
      auth: `Bearer ${token ? JSON.parse(token) : ""}`,
    },

    url: `/api/v1/po/add-po-details`,
    data,
  });
};

export const getPoList = () => {
  return axios({
    method: "get",
    headers: {
      "Content-Type": "application/json",
      auth: `Bearer ${token ? JSON.parse(token) : ""}`,
    },

    url: `/api/v1/po/get-po-list`,
  });
};

export const deletePoDetails = (po_number) => {
  console.log("inside deletepoaxios", po_number);

  return axios({
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      auth: `Bearer ${token ? JSON.parse(token) : ""}`,
    },

    url: `/api/v1/po/delete-po-details/${po_number}`,
   
  });
};

export const updatePoDetails = (data) => {
  console.log("inside updatepoaxios", data);

  return axios({
    method: "put",
    headers: {
      "Content-Type": "application/json",
      auth: `Bearer ${token ? JSON.parse(token) : ""}`,
    },

    url: `/api/v1/po/update-po-details`,
    data,
  })
}

// userId, offset, limit
// ${userId}?offset=${offset}&limit=${limit}