import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../Pages/Product'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'

const AlllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />
      </Routes>
    </div>
  )
}

export default AlllRoutes
