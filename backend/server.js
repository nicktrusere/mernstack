const express = require('express')
const bodyParser = require('body-parser')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const MementoModel = require('./models/mementoModel')
const UserModel = require('./models/userModel')

connectDB()

const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/api/memento', require('./routes/mememtoRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.get("/create", express.static("./frontend/public/create_memento"));
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
