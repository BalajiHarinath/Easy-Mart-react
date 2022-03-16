import { ACTION_TYPE_LOADING, ACTION_TYPE_SUCCESS, ACTION_TYPE_ERROR } from "../actionTypes";

export const ProductReducer = (products, action) => {

    switch(action.type){
        case ACTION_TYPE_LOADING:
            return{ ...products, productStatus: "loading" } 
        case ACTION_TYPE_SUCCESS:
            return { ...products, productStatus: "success", productData: action.payload }
        case ACTION_TYPE_ERROR:
            return { ...products, productStatus: "error", productData: action.payload }
        default:
            return products
    }

}