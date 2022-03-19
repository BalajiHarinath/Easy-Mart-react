import { createContext, useContext } from "react";
import { API_TO_GET_CATEGORIES } from "../utils/Constants/api";
import { useGetData } from "../utils";

const CategoryContext = createContext({
    categoryStatus : "loading",
    categoryData : null,
    categoriesDispatch : ()=>{}
});

const CategoryProvider = ({children}) => {
    const { sharedData: categories, sharedDispatch: categoriesDispatch } = useGetData(API_TO_GET_CATEGORIES);
    const { status: categoryStatus, data: categoryData } = categories;
    return(
        <CategoryContext.Provider value={{categoryStatus, categoryData, categoriesDispatch}}>
            {children}
        </CategoryContext.Provider>
    )
}

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };