
const express = require("express");

const router = express.Router();

const {createProduct, getProducts, getProductByName} = require("../Controllers/productController");

const uploadProductImages = require("../Middelware/uploadImages");

router.post("/createProduct", uploadProductImages, createProduct);
router.get("/products", getProducts);
router.get("/products/:name", getProductByName);

module.exports = router;