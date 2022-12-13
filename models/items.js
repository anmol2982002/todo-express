const mongoose = require("mongoose");

// setting up the schema (fields)
const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// setting the collection name and passing schema
const Todo = mongoose.model("Todo", itemSchema);
module.exports = Todo;
