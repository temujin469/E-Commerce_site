const ErrorHandler = require('../utils/errorHandler')

module.exports = (err,req,res,next) => {
    if(err.name === "CastError"){
        const message = `Resource not found invalid: ${err.path}`
    }

    if(err.name === "ValidationError"){
        const message = Object.values(err.errors).map(val=>val.message)
        err = new ErrorHandler(message,400)
    }
    res.status(err.statusCode || 500).json({
        success:false,
        error: err.message || "Дотоод серверийн алдаа"
    })
}