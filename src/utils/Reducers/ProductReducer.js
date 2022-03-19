export const ProductReducer = (products, {type, payload}) => {
    switch(type){
        case "ACTION_TYPE_LOADING":
            return{ ...products, productStatus: "loading" } 

        case "ACTION_TYPE_SUCCESS":
            return { ...products, productStatus: "success", productData: payload }
        
        case "ACTION_TYPE_ERROR":
            return { ...products, productStatus: "error", productData: payload }

        case "FILTER_BY_RATING":
            return {...products, filterData:{...products.filterData, filterByRating: payload}}

        case "FILTER_BY_CATEGORY":
           return products.filterData.filterByCategory.includes(payload) ? 
            { ...products, filterData:{...products.filterData, filterByCategory: products.filterData.filterByCategory.filter((item) => item!==payload)}} 
            : { ...products, filterData:{...products.filterData, filterByCategory: [...products.filterData.filterByCategory, payload]}}
           
        case "FILTER_BY_BRAND":
            return products.filterData.filterByBrand.includes(payload) ?
                {...products, filterData:{...products.filterData, filterByBrand: products.filterData.filterByBrand.filter((item) => item!==payload)}}
                : {...products, filterData:{...products.filterData, filterByBrand: [...products.filterData.filterByBrand, payload]}}

        case "SORT_LOW_TO_HIGH":
                return { ...products, sortBy: type}

        case "SORT_HIGH_TO_LOW":
                return { ...products, sortBy: type}

        case "OUT_OF_STOCK":
                return {...products, filterData:{...products.filterData, outOfStock: !products.filterData.outOfStock }}

        case "CLEAR":
                return {...products, sortBy: "", filterData: { filterByCategory: [], filterByBrand: [], filterByRating: 0, outOfStock: true}}

        default:
            return products
    }

}