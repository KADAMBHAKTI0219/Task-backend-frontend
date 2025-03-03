import {  ProductFailed, ProductPending, ProductResolved } from "../actionType";

const initialState = {
    product:[],
    isload:false,
    iserror:false,
}
export const reducer = (state =initialState,{type,payload})=>{
    switch(type){
        case ProductResolved :
        return {...state,product:payload, isload:false,iserror:false};
        case ProductPending :
            return {...state,product:payload, isload:true,iserror:false};
        case ProductFailed :
            return {...state,product:payload, isload:false,iserror:true};
        default :
            return state;
    }
}