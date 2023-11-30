const Task = require("../model/Task.Model")

const getAllTasks = async (req,res)=>{
    try {
        const allTasks = await Task.find({});
        res.status(200).send(allTasks)
    } catch (error) {
        res.status(500).send(error)
    }
}

const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).send(task)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getDetailTask = async (req,res)=>{
    const {id} = req.params
    try {
        const task = await Task.findOne({"_id":id})
        if(!task){
            res.status(404).send(`no task with id: ${id}`)
        }
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateTask = async (req,res)=>{
    const {id} = req.params
    const data = req.body
    try {
        const task = await Task.findOneAndUpdate({"_id":id},data,{
            new:true,runValidators:true
        });
        if(!task){
            return res.status(404).send(`No task with id : ${id}`)
        }
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteTask = async (req,res)=>{
    const {id} = req.params
    try {
        const deleteTask = await Task.deleteOne({"_id":id})
        if(!deleteTask){
            res.status(404).send(`no task with id: ${id}`)
        }
        res.status(200).send(`Delete successfull task with id : ${id}`)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports ={
    getAllTasks,createTask,getDetailTask,updateTask,deleteTask
}