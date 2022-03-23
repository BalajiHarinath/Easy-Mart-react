import { createContext, useContext } from "react";
import axios from "axios";
import { useAuth } from "./authenticationContext";


const CartContext = createContext();

const CartProvider = ({children}) => {

    const { authDispatch } = useAuth();

    const config = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    }

    const addToCart = async(item, toastText) => {
        try{
            const response = await axios.post(
                "/api/user/cart",
                {
                    product: item
                },
                config
            )
            if(response.status === 201){
                authDispatch({type: "ADD_TO_CART", payload:{toastMessage: toastText, data: response.data.cart}})
            }

        }catch(error){
            console.log(error)
        }
        
    }

    const removeFromCart = async(_id, toastText) => {
        try{
            const response = await axios.delete(
                `/api/user/cart/${_id}`, config
            )
            if(response.status === 200){
                authDispatch({type: "REMOVE_FROM_CART", payload:{toastMessage: toastText, data: response.data.cart}})
            }

        }catch(error){
            console.log(error)
        }
    }

    const updateItemQuantity = async(_id, actionType, toastText) => {
        try{
            const response = await axios.post(
                `/api/user/cart/${_id}`,
                {
                    action:{
                        type: actionType
                    }
                },
                config
            )
            if(response.status === 200){
                authDispatch({type: "UPDATE_CART", payload:{toastMessage: toastText, data: response.data.cart}})
            }

        }catch(error){
            console.log(error)
        }
    }

    return(
        <CartContext.Provider value={{addToCart, removeFromCart, updateItemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };