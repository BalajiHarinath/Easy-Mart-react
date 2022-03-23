import { createContext, useContext } from "react";
import axios from "axios";
import { useAuth } from "./authenticationContext";

const WishlistContext = createContext();

const WishlistProvider = ({children}) => {

    const { authDispatch } = useAuth();
    const config = {
        headers:{
            authorization: localStorage.getItem("token"),
        }   
    }

    const addToWishlist = async(item, toastText) => {
        try{
            const response = await axios.post(
                "/api/user/wishlist",
                {
                    product: item,
                },
                config,                      
            )
            if(response.status === 201){
                authDispatch({type:"ADD_TO_WISHLIST", payload: {toastMessage: toastText, data: response.data.wishlist}})
            }         

        }catch(error){
            console.log(error);
        }
    }

    const removeFromWishlist = async(_id, toastText) => {
        console.log(_id)
        try{
            const response = await axios.delete(
                `/api/user/wishlist/${_id}`, config
                )
            if(response.status === 200){
                console.log(response.data)
                authDispatch({type:"REMOVE_FROM_WISHLIST", payload: {toastMessage: toastText, data: response.data.wishlist}})
            }
            
        }catch(error){
            console.log(error);
        }
    }


    return(
        <WishlistContext.Provider value={{addToWishlist, removeFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist }