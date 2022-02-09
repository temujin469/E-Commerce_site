const mongoose = require('mongoose')

const connectDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log("DB has connected"))
}

module.exports = connectDatabase;