const express = require('express');

const router = express.Router();
const { addToCart, getItems, updateItem, removeItem } = require('../Controllers/cartController');

router.post('/add', addToCart);
router.get('/items', getItems);
router.put('/update/:itemId', updateItem);
router.delete('/remove/:itemId', removeItem);

module.exports = router;