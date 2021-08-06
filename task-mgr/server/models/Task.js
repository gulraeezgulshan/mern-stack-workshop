const mongoose = require("mongoose");

const TaskScheme = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskScheme);
