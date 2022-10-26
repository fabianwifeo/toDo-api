const Task = require('../models/Task');

exports.createTask = (req, res, next) => {
    const newTask = new Task({
        task: req.body.task
    });
    newTask.save()
    .then(() => res.status(201).json({message: 'new task added'}))
    .catch((error) => res.status(400).json(error))
};

exports.getAllTasks = (req, res, next) => {
    Task.find()
    .then(tasks => res.status(200).json(tasks))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteOneTask = (req, res, next) => {
    Task.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({message: 'task deleted'}))
    .catch((error) => res.status(400).json({error}))
};

exports.deleteAllTasks = (req, res, next) => {
    Task.deleteMany({})
    .then(() => res.status(200).json({message: 'tasks list cleared'}))
    .catch((error) => res.status(400).json({error}))
};