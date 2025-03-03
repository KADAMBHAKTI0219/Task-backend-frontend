import axios from "axios"
import { ProductFailed, ProductPending, ProductResolved } from "../actionType"

export const GetProductData = (dispatch)=>{
    dispatch({type:ProductPending})
    axios.get('http://localhost:5000/productData/get').then((res)=>{
        dispatch({type:ProductResolved,payload:res.data.data})
    })
    .catch(error=>dispatch({type:ProductFailed}))

}