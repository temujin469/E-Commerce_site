const app = require('./app')
require('dotenv').config()
const connectDatabase = require('./config/database')

//connecting database
connectDatabase()

const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log(`server is working on ${PORT}`)
})
