import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { BrandReducer } from "../utils";

const initialBrandData = {
    brandStatus: "loading",
    brandData: null
}

const BrandContext = createContext();

const BrandProvider = ({children}) => {

    const[brands,brandDispatch] = useReducer(BrandReducer,initialBrandData)

    useEffect(() => {
        (async () => {
            brandDispatch({type:"ACTION_TYPE_LOADING"})
            try{
                const response = await axios.get("api/brands")
                brandDispatch({type:"ACTION_TYPE_SUCCESS", payload:response.data.brands})
            }catch{
                brandDispatch({type:"ACTION_TYPE_ERROR", payload:"Error in loading the brands data"})
            }
        })()
    },[])

    return(
        <BrandContext.Provider value={{brands,brandDispatch}}>
            {children}
        </BrandContext.Provider>
    )
}

const useBrand = () => useContext(BrandContext);

export { BrandProvider, useBrand };

