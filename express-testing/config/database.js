const {
  MONGODB_URL,
  DB_USERNAME,
  DB_PASSWORD,
} = require("./env.js");

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      auth: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
      },
      authSource: "admin",
    });
    console.log("connected to MnogoDB");
  } catch (error) {
    console.error("Error connecting to MnogoDB:", error);
  }
}

module.exports = connectDB;
