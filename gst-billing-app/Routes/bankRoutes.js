const express = require("express");
const {
    getBankProfile,
  } = require("../Controllers/bankController");
  const Auth = require("../middlewares/auth");
const { HandleErrors } = require("../middlewares/handleError");
const bankRoutes = express.Router();
bankRoutes.get("/get-bank-profile",Auth, HandleErrors(getBankProfile));
module.exports = { bankRoutes };