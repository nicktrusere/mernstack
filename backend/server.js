const express = require('express')
const bodyParser = require('body-parser')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/api/events', require('./routes/eventRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
