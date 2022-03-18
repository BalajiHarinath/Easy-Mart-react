export const BrandReducer = (brands,action) => {

    switch(action.type){
        case "ACTION_TYPE_LOADING":
            return {...brands, brandStatus: "loading"}
        
        case "ACTION_TYPE_SUCCESS":
            return{...brands, brandStatus: "success", brandData:action.payload}

        case "ACTION_TYPE_ERROR":
            return{...brands, brandStatus: "error", brandData:action.payload}

        default:
            return brands;
    }
}