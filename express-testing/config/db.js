require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      "auth": {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
      },
      "authSource": "admin",
    });
    console.log("connected to MnogoDB");
  } catch (error) {
    console.error("Error connecting to MnogoDB:", error);
  }
}

module.exports = connectDB;
