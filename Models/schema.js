import mongoose from "mongoose";
const ProductSchema = mongoose.Schema({
    productName:{
        type:String,
        require:true,
    },
    productPrice:{
        type:Number,
        require:true,
    },
    productImage:{
        type:String,
        require:true,
    },

})
const Products = mongoose.model("products",ProductSchema)

export default Products;