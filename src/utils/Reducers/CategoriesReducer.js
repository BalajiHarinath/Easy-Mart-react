import { ACTION_TYPE_LOADING, ACTION_TYPE_SUCCESS, ACTION_TYPE_ERROR } from "../actionTypes";

export const CategoriesReducer = (categories, action) => {
    // console.log(action.payload,"reducer")
    switch(action.type) {
        case ACTION_TYPE_LOADING : 
            return {...categories, categoryStatus:"loading"}
        case ACTION_TYPE_SUCCESS : {
            console.log(action.payload, "reducer")
            return {...categories,  categoryStatus:"success", categoryData:action.payload}
        }
           
        case ACTION_TYPE_ERROR :
            return {...categories, categoryStatus:"error", categoryData:action.payload}
        default :
            return categories
    }

}