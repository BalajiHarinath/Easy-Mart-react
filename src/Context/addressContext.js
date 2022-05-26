import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useAuth } from "./authenticationContext";

const AddressContext = createContext();

const AddressProvider = ({children}) => {
    const { authDispatch } = useAuth();
    
    const config = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    }

    const getAddress = async() => {
        try{
            const response  = await axios.get(
                "/api/user/address",
                config
                )
            if(response.status === 200){
                authDispatch({type: "GET_ADDRESS", payload: { data: response.data.address }})
            }
            else if(response.status === 404){
                authDispatch({type: "HANDLER_FAIL", payload: { toastMessage:"The email is not Registered" } })
            } 

        }catch(error){
            console.error(error)
            authDispatch({type: "HANDLER_FAIL", payload: { toastMessage: "Address could not be fetched" }})
        }      
    }

    const addAddress = async(addressData) => {
        try{
            const response  = await axios.post(
                "/api/user/address",
                { address: addressData },
                config
                )
            if(response.status === 201){
                authDispatch({type: "ADD_ADDRESS", payload: { toastMessage:"Address Added", data: response.data.address }})
            }
            else if(response.status === 404){
                authDispatch({type: "HANDLER_FAIL", payload: { toastMessage:"The email is not Registered" } })
            } 

        }catch(error){
            console.error(error)
            authDispatch({type: "HANDLER_FAIL", payload: { toastMessage: "Address could not be added" }})
        }      
    }


    const editAddress = async(_id, updatedAddress) => {
        try{
            const response  = await axios.post(
                `/api/user/address/${_id}`,
                { address: updatedAddress },
                config
                )
            if(response.status === 200){
                authDispatch({type: "UPDATE_ADDRESS", payload: { toastMessage:"Address Updated", data: response.data.address }})
            }
            else if(response.status === 404){
                authDispatch({type: "HANDLER_FAIL", payload: { toastMessage:"The email is not Registered" } })
            } 

        }catch(error){
            console.error(error)
            authDispatch({type: "HANDLER_FAIL", payload: { toastMessage: "Address could not be updated" }})
        }      
    }

    const removeAddress = async(_id) => {
        try{
            const response  = await axios.delete(
                `/api/user/address/${_id}`,
                config
                )
            if(response.status === 200){
                authDispatch({type: "REMOVE_ADDRESS", payload: { toastMessage:"Address Removed", data: response.data.address }})
            }
            else if(response.status === 404){
                authDispatch({type: "HANDLER_FAIL", payload: { toastMessage:"The email is not Registered" } })
            } 

        }catch(error){
            console.error(error)
            authDispatch({type: "HANDLER_FAIL", payload: { toastMessage: "Address could not be removed" }})
        }      
    }
    
    return(
        <AddressContext.Provider value={{getAddress, editAddress, addAddress, removeAddress}}>
            {children}
        </AddressContext.Provider>
    )
}

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress};