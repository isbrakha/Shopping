const Product = require('../models/product')

module.exports = {
    index,
    new: newMovie,
    create,
    show
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

function newMovie(req,res) {
    res.render('products/new', {title: "Add Product", errorMsg: ''})
}

async function create(req,res) {
    try {
        const newProduct = await Product.create(req.body)
        res.redirect(`products/${newProduct._id}`)
    } catch(err) {
        console.log(err)
        res.redirect('/')
    }
}

async function show(req,res) {
    try {
        const product = await Product.findById(req.params.id)

        res.render('products/show', { title: 'Product Details', products: product})
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }

}