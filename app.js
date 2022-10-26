const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const dbUserName = process.env.dbUserName;
const dbPassword = process.env.dbPassword;

const app = express();

mongoose.connect(`mongodb+srv://${dbUserName}:${dbPassword}@cluster0.0bj8qgo.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log('Connected to MongoDB !'))
    .catch(() => console.log('Connection to MongoDB failed !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const router = require('./routes/tasks');
app.use('/api/tasks', router);

module.exports = app;