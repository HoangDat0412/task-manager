const express = require("express");
const Task_Router = require("./task.router");

const Root_Router = express.Router();
Root_Router.use("/tasks",Task_Router)


module.exports = Root_Router