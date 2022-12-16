import { ActionTypes } from "../constants/action-types"

// Set product action
export const setProducts = (products) =>{
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products,
    }

}
//  select product action
export const slectedProduct = (product) =>{
    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload : product,
    }

}