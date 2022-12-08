//schema for products
const mongoose= require('mongoose')

const ProductSchema= mongoose.Schema({
   name: {
    type: String,
    required: true
},
   price: {
    type: String,
    required: true
   },
   image: {
    type: String, 
    required: true
   },
   description: {
    type: String, 
    required: true
   },
   category: {
    type: String, 
    required: true
   }
});

const product= mongoose.model("prod", ProductSchema);
module.exports = product;
