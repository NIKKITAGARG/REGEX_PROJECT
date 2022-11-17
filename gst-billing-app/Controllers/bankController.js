const { request } = require("express");
const bankProfileService = require("../Services/bankService");

const getBankProfile = async (req, res) => {
    // console.log("inside po list");
   
    const response = await bankProfileService.getBankDetails();
    console.log("<<response",response);
  
    res.send(response);
  };
  module.exports = { getBankProfile };