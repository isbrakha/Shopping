var express = require('express');
var router = express.Router();
const productsCtrl = require('../controllers/products')

/* GET users listing. */
router.get('/', productsCtrl.index)
module.exports = router;
