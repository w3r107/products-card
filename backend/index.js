const cors = require("cors");
// const connection = require("./db");
const express = require("express");
// const tasks = require("./routes/tasks");
// import task from "./models/task";

const mongoose = require("mongoose");
const task = require("./models/task");

const prodRoutes = express.Router();

const app = express();

// connection();
mongoose.connect(
  "mongodb+srv://tush1:qwer1234@nodeexpressprojects.r6fgo.mongodb.net/Internship?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
app.use(express.json());
app.use(cors());
// app.use("/", tasks);

prodRoutes.route("/").get((req, res) => {
  task.find((err, todos) => {
    if (err) console.log(err);
    else {
      res.json(todos);
    }
  });
});

prodRoutes.route("/create").post((req, res) => {
  const todo = new task(req.body);
  todo
    .save()
    .then((todo) => {
      res.status(200).json({ todo: "todo added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("adding new todo failed");
    });
});

const port = 5000;

app.use("/prods", prodRoutes);

app.listen(port, () => console.log(`listening on port number ${port}`));
