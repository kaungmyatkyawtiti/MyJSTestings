const mongoose = require("mongoose");
const username = "nott_eucalyptus";
const password = "kaungmyatkyaw@2003";

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/react_10batch_test`, {
      "auth": {
        "username": username,
        "password": password,
      },
      "authSource": "admin",
    });
    console.log("connected to MnogoDB");
  } catch (error) {
    console.error("Error connecting to MnogoDB:", error);
  }
}

module.exports = connectDB;
