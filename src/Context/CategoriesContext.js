import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { ACTION_TYPE_LOADING, ACTION_TYPE_SUCCESS, ACTION_TYPE_ERROR } from "../utils/actionTypes";
import { CategoriesReducer } from "../utils/Reducers/CategoriesReducer";

const initialCategoryData = {
    categoryStatus : "loading",
    categoryData : null,
}

const CategoryContext = createContext({
    categories : initialCategoryData,
    categoriesDispatch : ()=>{}
});

const CategoryProvider = ({children}) => {

    const [categories, categoriesDispatch] = useReducer(CategoriesReducer,initialCategoryData);

    useEffect(() => {
        (async () => {
            categoriesDispatch({type: ACTION_TYPE_LOADING})
            try{
                const response = await axios.get("/api/categories");
                categoriesDispatch({ type: ACTION_TYPE_SUCCESS, payload: response.data.categories })
            }
            catch{
                categoriesDispatch({type: ACTION_TYPE_ERROR, payload: "Error in fetching the category data"})
            }
        })()
    },[])

    return(
        <CategoryContext.Provider value={{categories, categoriesDispatch}}>
            {children}
        </CategoryContext.Provider>
    )
 
}

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };