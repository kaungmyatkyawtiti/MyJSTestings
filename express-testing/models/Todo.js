const mongoose = require("mongoose");
const Schema = mongoose.Scehma;
const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
  }
})

module.exports = mongoose.models("Todos", TodoSchema);
