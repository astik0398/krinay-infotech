const express = require('express')
const app = express()
const {connection} = require('./db')
const {todoRouter} = require('./routes/todo.routes')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/', todoRouter)

app.listen(9090, async()=> {
    try {
        await connection
        console.log('connected to the db');
        console.log('server running on port 9090');
    } catch (error) {
        console.log(error);
    }
})