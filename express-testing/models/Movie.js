const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
  title: {
    type: String,
    required: false,
  },
  director: {
    type: {
      name: {
        type: String,
        required: true,
      },
      phoneNo: {
        type: String,
      }
    },
    required: true,
  },
  year: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("Movies", MovieSchema);
