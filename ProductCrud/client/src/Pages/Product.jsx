import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProductData } from '../ProductRedux/action'
import { Link } from 'react-router-dom'

const Product = () => {
    const {product,isload,iserror} = useSelector(store => store)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(GetProductData)
    },[])

    const handleDelete = (id)=>{
      axios.delete(`http://localhost:5000/productData/delete/${id}`)
      .then(res=>(
        alert("Data Deleted Successfully"),
        dispatch(GetProductData)
      )).catch(err=>(
        console.log(err)
      ))
    }
  return isload ? <h1>Loading......</h1> : iserror ? <h1>Something Went Wrong... </h1> : (
    <div>
      <h1 style={{textAlign:"center"}}>Products</h1>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
    { product.map((el,index)=>(
            <div key={index} style={{width:"300px",height:"300px"}}>
                <h3>{el.name}</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmr4kN9de6XBt4yJJdlC5-mAxGaRY7R70ow&s" alt="" height={200} width={200}/>
                <p>{el.price}</p>
                <p>{el.description}</p>
                <Link to={`/editProduct/${el._id}`}>Edit</Link>
                <button onClick={()=>handleDelete(el._id)}>Delete</button>
            </div>
        ))
    }
   
    </div>
    </div>
  )
}

export default Product
