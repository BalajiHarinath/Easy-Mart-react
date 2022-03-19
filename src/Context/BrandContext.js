import { createContext, useContext } from "react";
import { API_TO_GET_BRANDS } from "../utils/Constants/api";
import { useGetData } from "../utils";

const BrandContext = createContext({
    brandStatus: "loading",
    brandData: null,
    brandDispatch: () => {}
});

const BrandProvider = ({children}) => {
    const { sharedData: brands, sharedDispatch: brandDispatch } = useGetData(API_TO_GET_BRANDS);
    const { status: brandStatus, data: brandData } = brands;
    return(
        <BrandContext.Provider value={{brandStatus, brandData, brandDispatch}}>
            {children}
        </BrandContext.Provider>
    )
}

const useBrand = () => useContext(BrandContext);

export { BrandProvider, useBrand };

