import { useEffect, useReducer } from "react";
import axios from "axios";
import { SharedReducer } from "../Reducers/SharedReducer";

const initialSharedData = {
    status: "loading",
    data: null
}

export const useGetData = (api) => {
    const [sharedData, sharedDispatch] = useReducer(SharedReducer,initialSharedData);
    const { path, propertyToGet} = api;
    useEffect(() => {
        (async () => {
                sharedDispatch({type: "ACTION_TYPE_LOADING"})
            try{
                const response = await axios.get(path);
                sharedDispatch({ type: "ACTION_TYPE_SUCCESS", payload: response.data[propertyToGet] })
            }
            catch{
                sharedDispatch({type: "ACTION_TYPE_ERROR", payload: "Error in fetching the category data"})
            }
        })()
    },[api])

    return { sharedData, sharedDispatch};
}