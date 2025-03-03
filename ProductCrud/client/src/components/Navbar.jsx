import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink to={'/'}>Product</NavLink>
      <NavLink to={'/addProduct'}>Add Product</NavLink>
    </div>
  )
}

export default Navbar
