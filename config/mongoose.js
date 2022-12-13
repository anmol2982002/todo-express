const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/TodoList_db"); // this is how mongoose will connect to database

// acquire the connection (to check if mongoose is successfully connected to db)
var db = mongoose.connection;

// console.error() is used o through an error.

db.on("error", console.error.bind(console, "error connecting to db")); // if any error occurs connecting to db through an error.

// if up and running print the msg
db.once("open", () => {
  console.log("successful connection with db");
});
