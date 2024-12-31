const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to db!"))
  .catch((err) => console.log("Error while connecting to db : ", err));
