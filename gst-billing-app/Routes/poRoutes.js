const express = require("express");
const {
  addpoDetails,
  getpoList,
  updatepoDetails,
  deletepoDetails,
} = require("../Controllers/poController");
const Auth = require("../middlewares/auth");
const { HandleErrors } = require("../middlewares/handleError");

const poRoutes = express.Router();

console.log("inside poroutes")
poRoutes.post("/add-po-details", Auth, HandleErrors(addpoDetails));
poRoutes.get("/get-po-list", HandleErrors(getpoList));
poRoutes.delete("/delete-po-details/:id", HandleErrors(deletepoDetails));
poRoutes.put("/update-po-details", Auth, HandleErrors(updatepoDetails));

module.exports = { poRoutes };
