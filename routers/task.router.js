const express = require("express");
const { getAllTasks, createTask, getDetailTask, deleteTask, updateTask } = require("../controllers/task.controller");

const Task_Router = express.Router();

Task_Router.get("/",getAllTasks)
Task_Router.post("/",createTask)
Task_Router.get("/:id",getDetailTask)
Task_Router.delete("/:id",deleteTask)
Task_Router.patch("/:id",updateTask)

module.exports = Task_Router