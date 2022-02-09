const express = require('express')
const app = express()

//import Error middleware
const errorMiddleware = require('./middlewares/error')

app.use(express.json())

//Route Import 
const product = require('./routes/productRoute')

app.use('/api/v1',product)

//Error Middleware
app.use(errorMiddleware)

module.exports = app