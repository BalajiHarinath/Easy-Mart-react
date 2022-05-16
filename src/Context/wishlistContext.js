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
            else if(response.status === 404){
                authDispatch({type: "HANDLER_FAIL", payload: { toastMessage:"The email is not Registered" } })
            }       

        }catch(error){
            console.log(error);
            authDispatch({type: "HANDLER_FAIL", payload: { toastMessage:"Add to wishlist failed" } })
        }
    }

    const removeFromWishlist = async(_id, toastText) => {
        try{
            const response = await axios.delete(
                `/api/user/wishlist/${_id}`, config
                )
            if(response.status === 200){
                authDispatch({type:"REMOVE_FROM_WISHLIST", payload: {toastMessage: toastText, data: response.data.wishlist}})
            }
            else if(response.status === 404){
                authDispatch({type: "HANDLER_FAIL", payload: { toastMessage:"The email is not Registered" } })
            } 
            
        }catch(error){
            console.log(error);
            authDispatch({type: "HANDLER_FAIL", payload: { toastMessage:"Remove from wishlist failed" } })
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