const express = require('express')

const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb+srv://kumarastik0398:astik@cluster0.lcxjcaq.mongodb.net/todo-app?retryWrites=true&w=majority')

module.exports = {
    connection
}