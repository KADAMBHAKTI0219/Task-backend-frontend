const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    title:String,
    price:Number,
    description:String
})
const ProductDataModel = mongoose.model('Products', productSchema)
module.exports = {ProductDataModel};