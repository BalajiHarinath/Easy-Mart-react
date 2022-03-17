import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { ProductReducer } from "../utils/Reducers/ProductReducer";
import { ACTION_TYPE_LOADING, ACTION_TYPE_SUCCESS, ACTION_TYPE_ERROR } from "../utils/actionTypes";

const initialProductData = {
    productStatus: "loading",
    productData: null
}

const ProductContext = createContext({
    products: initialProductData,
    productsDispatch: () => {}
})

const ProductProvider = ({children}) => {

    const [products, productsDispatch] = useReducer(ProductReducer, initialProductData);

    useEffect(() => {
        
        (async() => {
            productsDispatch({type: ACTION_TYPE_LOADING})
            try{         
                const response = await axios.get("/api/products");
                productsDispatch({type: ACTION_TYPE_SUCCESS, payload: response.data.products})
            }
            catch{
            productsDispatch({type: ACTION_TYPE_ERROR, payload:"Error in fetching the product data"})
            }
        })()
        
    },[])

    return(
        <ProductContext.Provider value={{products, productsDispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };