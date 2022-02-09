const router = require('express').Router();
const {
    createProduct,
    getAllProducts, 
    getProduct} = require('../controllers/productController');


router.route('/products').post(createProduct).get(getAllProducts)
router.route('/products/:id').get(getProduct)
module.exports = router;