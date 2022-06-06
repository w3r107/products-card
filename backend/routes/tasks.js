const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/createUser", async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.send(task);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get("/get-prod", async (req, res) => {
  try {
    const tasks = await Task.find();
    console.log(tasks);
    res.send(tasks);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// router.put("/:id", async (req, res) => {
//   try {
//     const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body);
//     res.send(task);
//   } catch (error) {
//     res.send(error);
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const task = await Task.findByIdAndDelete(req.params.id);
//     res.send(task);
//   } catch (error) {
//     res.send(error);
//   }
// });

module.exports = router;
