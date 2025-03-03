const { ProductDataModel } = require("../Model/productModel");


const createProductData =async (req,res)=>{
     const {title,price,description} = req.body;
     if(!title || !price || !description){
        return res.status(400).json({message:"Please fill all the fields"})
     }
    try {
       const productData = await ProductDataModel.create({title,price,description})
        res.status(201).json({message:"Product created successfully",data:productData})
    } catch (error) {
        return res.status(400).json({message:"Invalid Error form Create Data"})
    }
}


const getProductData = async(req,res)=>{
    try {
       const Data =  await ProductDataModel.find();
        return res.status(201).json({message:"Product Get successfully",data:Data})
    } catch (error) {
        return res.status(400).json({message:"Invalid Error from Get Data"})
    }
}

const updateProductData = async(req,res)=>{
    const {title,price,description} = req.body;
    const id = req.params.id;
    if(!title || !price || !description){
        return res.status(400).json({message:"Please fill all the fields"})
        }
        try {
        const updated = await ProductDataModel.findByIdAndUpdate(id,{title,price,description},{new:true})
         if(!updated){
            return res.status(400).json({message:"Product not found"})
         }
        
        return res.status(200).json({message:"Product data updated successfully",data:updated})
  
        } catch (error) {
            return res.status(400).json({message:"Invalid Error from Update Data"})
        }
}

const deleteProductData = async(req,res)=>{
    const id = req.params.id;
    try {
       await ProductDataModel.findByIdAndDelete(id);
       res.status(201).json({message:"Product deleted successfully"})
    } catch (error) {
        return res.status(400).json({message:"Invalid Error from Delete Data"})
    } 
}

const getSingleData =async (req,res)=>{
    const id = req.params.id
    try {
        const getsingle = await ProductDataModel.findById(id)
        res.status(201).json({message:"Product Get successfully",data:getsingle})
    } catch (error) {
        return res.status(400).json({message:"Invalid Error from GetSingle data"})
    }
}
module.exports = {createProductData,getProductData,updateProductData,deleteProductData,getSingleData}