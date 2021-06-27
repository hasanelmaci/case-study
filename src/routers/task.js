const express = require("express");
const Task = require("../models/task");

const router = express.Router();

//Add a new task
router.post("/api/add-task", async (req, res) => {
  const task = new Task({
    ...req.body,
  });
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Read all tasks
router.get("/api/read-tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Update a task by its id
//It allowes only specific updates: description or completed status
//If operation is not valid it returns 400
//If task is not found, it return 404
router.patch("/api/update-task/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];

  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates" });
  }
  try {
    const task = await Task.findOne({
      _id: req.params.id,
    });
    if (!task) {
      return res.status(404).send();
    }

    updates.forEach((update) => {
      task[update] = req.body[update];
    });
    await task.save();

    res.send(task);
  } catch (e) {
    res.status(404).send();
  }
});

//Delete a specific task by its id
router.delete("/api/delete-task/:id", async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
