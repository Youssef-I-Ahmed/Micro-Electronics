const Cart = require("../Models/Cart");
const Product = require("../Models/Product");
const User  = require("../Models/User");

const addToCart = async (req, res) => {
    try {
        //get data from request body
        const { userId, productId, quantity } = req.body;
        // Validate input
        if (!userId || !productId || !quantity) {
            return res.status(400).json({ msg: "Invalid Data, NiGGA!!" });
        }
        // check user existance
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: "User not found!!" });
        }
        // Check if product exists and has enough stock
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ msg: "Product not found!!" });
        }
        if (product.stock < quantity) {
            return res.status(400).json({ msg: "Not enough stock available!!" });
        }

        // Find or create cart for the user
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            const newCart = await Cart.create({ userId, items: [] });
                console.log("Received cart data:", newCart);
            
                res.status(201).json({
                  message: "Cart created successfully",
                  data: newCart,
                });
        }

        // Check if product is already in cart
            // Update quantity if product is already in cart
            // Add new product to cart
            // Save cart
       
        // Decrease product stock
        
        // Optionally, you can also return the updated cart or the total price here
        //calculate total price
    } catch (error) {
        console.log(error);
    }};


    const getItems = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }};


    const updateItem = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }};


    const removeItem = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }};

module.exports = { addToCart, getItems, updateItem, removeItem};