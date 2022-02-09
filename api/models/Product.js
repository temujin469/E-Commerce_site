const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "garchig oruul"],
        unique:false,
        trim:true
    },
    // user:{
    //     type:mongoose.Schema.ObjectId,
    //     ref:"User",
    //     required:true,
    // },
    desc:{
        type:String,
        required:true,
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            },
        }
    ],
    categories:{
        type:String,
        required:[true,"Categorygo oruuln uu"]
    },
    kind:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true, "vniin dvngee oruul"],
        maxlength:[8,'heterhii urt bain']
    },
    option:{
        type:Array,
    },
    stock:{
        type:Number,
        default:1, 
        required:[true,'nuutsu hiin vv']
    },
    isFeatured:{
        type:Boolean,
        default:false,
    },
    numOfViews:{
        type:Number,
        default:0,
    }
    
},{timestamps:true})

module.exports = mongoose.model("Product",ProductSchema)