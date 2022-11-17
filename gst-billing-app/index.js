const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToDb } = require("./db/connection");
const { userRoutes } = require("./Routes/userRoutes");
const { authRoutes } = require("./Routes/authRoutes");
const { poRoutes } = require("./Routes/poRoutes");
const { profileRoutes } = require("./Routes/profileRoutes");
const { bankRoutes } = require("./Routes/bankRoutes");

const app = express();
require('dotenv').config();  
const port = process.env.PORT||3001;

connectToDb();


app.use(cors());
app.use(bodyParser.json({ limit: "5mb" }));
app.use(express.json({ limit: "5mb" })); //For JSON requests
app.use(express.urlencoded({ extended: true, limit: "5mb" }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/po", poRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/bank/",bankRoutes);

if(process.env.NODE_ENV==="production"){
  app.use(express.static("firstapp/build"));
  const path=require("path");
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'firstapp','build','index.html'));
  })
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});