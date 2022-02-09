const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    title:{type:String ,required:true},
    path:{type:String ,required:true},
    subCat:[
        {
            title:{type:String},
            path:{type:String, required:true}
        },
    ]
})

module.exports = mongoose.model("Category",CategorySchema)