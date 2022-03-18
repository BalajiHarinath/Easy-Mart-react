export const CategoriesReducer = (categories, action) => {
    switch(action.type) {
        case "ACTION_TYPE_LOADING" : 
            return {...categories, categoryStatus:"loading"}

        case "ACTION_TYPE_SUCCESS" :
            return {...categories,  categoryStatus:"success", categoryData:action.payload}
           
        case "ACTION_TYPE_ERROR" :
            return {...categories, categoryStatus:"error", categoryData:action.payload}
            
        default :
            return categories
    }

}