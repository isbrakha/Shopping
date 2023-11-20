var express = require('express');
var router = express.Router();
const productsCtrl = require('../controllers/products')

/* GET users listing. */
router.get('/', productsCtrl.index)
router.get('/new', productsCtrl.new)
router.post('/', productsCtrl.create)
router.get('/:id', productsCtrl.show)
router.delete('/:id', productsCtrl.delete)
router.get(':id/edit', productsCtrl.edit)

module.exports = router;
