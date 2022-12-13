const express = require("express");
const path = require("path");
const db = require("./config/mongoose.js");
const Todo = require("./models/items.js");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(__dirname));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  Todo.find({}, (err, tasks) => {
    if (err) {
      console.log("There is some error");
      return;
    }
    return res.render("home.ejs", {
      task_list: tasks,
    });
  });
});

app.post("/", (req, res) => {
  Todo.create(
    {
      title: req.body.title,
      description: req.body.desc,
    },
    (err, newTask) => {
      if (err) {
        console.log("error in creating new task");
        return;
      }
      console.log("*******", newTask);
      return res.redirect("back");
    }
  );
});

app.get("/del_task", (req, res) => {
  let id = req.query.id;
  Todo.findByIdAndDelete(id, (err) => {
    if (err) {
      console.log("there is some error");
      return;
    }
    return res.redirect("back");
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("server is up and running on port:", PORT);
  }
});
