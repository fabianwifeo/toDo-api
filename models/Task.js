const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    task: { type: String, required: true },   
}, {
    versionKey: false
});

module.exports = mongoose.model('Task', taskSchema);