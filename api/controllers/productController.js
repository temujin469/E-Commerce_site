const Product = require('../models/Product')
const ErrorHandler = require('../utils/errorHandler')

//create product
exports.createProduct = async (req,res,next)=>{
        const newProduct =  await Product.create(req.body)

        res.status(201).json({
            success:true,
            newProduct  
        })
}

//get all products
exports.getAllProducts = async (req,res,next)=>{
    const products = await Product.find()
    res.status(200).json({
        success:true,
        products
    })
}

// get product detail
exports.getProduct = async (req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler("Бүтээгдэхүүн олдсонгүй",404));
    }

    res.status(200).json({
        success:true,
        product
    })
}

//update product
exports.updateProduct = async (req,res,next)=>{
    const product = await Product.findById(req.params.id)

    if(!product){
        return next(new ErrorHandler("Бүтээгдэхүүн олдсонгүй",404));
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json({
        succces:true,
        product
    })
}