const joi = require("joi");

const addProductSchema = joi.object({
    name: joi.string().min(3).max(50).required(),
    description: joi.string().min(10).max(500).required(),
    price: joi.number().positive().required(),
    category: joi.string().min(3).max(30).required(),
    stock: joi.number().integer().min(0).required(),
});

module.exports = addProductSchema;
