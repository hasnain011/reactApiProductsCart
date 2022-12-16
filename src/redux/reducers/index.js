// root reducer
import { combineReducers } from "redux";
import { ProductsReducer } from "./ProductsReducer";

const reducers = combineReducers({
    allproducts : ProductsReducer,
})

export default reducers