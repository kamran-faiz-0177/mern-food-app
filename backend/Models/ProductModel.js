const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productImg: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    productCategory: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
   
}, { timestamps: true });

const ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;