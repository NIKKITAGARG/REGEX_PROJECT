const express = require("express");
const {
  getProfile,
} = require("../Controllers/profileController");
const Auth = require("../middlewares/auth");
const { HandleErrors } = require("../middlewares/handleError");

const profileRoutes = express.Router();

console.log("inside profileroutes")

profileRoutes.get("/get-profile", Auth, HandleErrors(getProfile));

module.exports = { profileRoutes };
