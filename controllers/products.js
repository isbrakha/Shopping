const Product = require('../models/product')

module.exports = {
    index
}

async function index(req,res) {
    try {
        const allProducts = await Product.find()
        res.render('products/index', {title: 'All Products', products: allProducts})
    } catch(err) {
        console.log(err)
        res.redirect('/')
    }
}
