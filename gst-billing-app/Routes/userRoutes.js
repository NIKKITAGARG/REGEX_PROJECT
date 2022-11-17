const express = require("express");
const { Users } = require("../Models/users");

const userRoutes = express.Router();

userRoutes.post("/add-user-data", async (req, res) => {
  const data = req.body;

  console.log(">>>>>>>>>>>>>.data", data);
  const createUserRes = await Users.create({ ...data, phone_no: data.phoneNo });

  console.log(">>>>>>>>>>>>>.createUserRes", createUserRes);

  res.send({
    success: true,
    message: "Added user successfully.",
  });
});

userRoutes.get("/get-user-data", async (req, res) => {
  const users = await Users.find();

  console.log(">>>>>>>>>>>>users", users);
  if (users.length) {
    res.send({
      success: true,
      message: "Found user successfully.",
      data: users,
    });
  } else {
    res.send({
      success: false,
      message: "No users found.",
      data: [],
    });
  }
});

module.exports = { userRoutes };
