const { request } = require("express");
const profileService = require("../Services/profileService");

const getProfile = async (req, res) =>{
    const response = await profileService.getProfileDetails();
    console.log("<<<<<<responseprofile", response);
    res.send(response);
};
module.exports = { getProfile };