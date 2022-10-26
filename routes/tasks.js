const express = require('express');

const router = express.Router();

const tasksControl = require('../controllers/tasks');

router.post('/', tasksControl.createTask);
router.get('/', tasksControl.getAllTasks);
router.delete('/', tasksControl.deleteAllTasks);
router.delete('/:id', tasksControl.deleteOneTask);

module.exports = router;