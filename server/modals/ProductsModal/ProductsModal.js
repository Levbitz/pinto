import mongoose from 'mongoose';


const ProductsSchema = mongoose.Schema({

    _id: String,
    title: String,
filters: String,
    availability: Boolean,
    colors: Array,
    selectedColor: String,
    sizes: Array,
    selectedSize: String,
    seller: String,
    count:Number,
    price: Number,
specifications: String,
    description:String,
    sliders: Array

})

var products = mongoose.model('product', ProductsSchema);

export default products;
