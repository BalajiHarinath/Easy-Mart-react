import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { authReducer } from "../utils";

const userId = localStorage.getItem("token")
const initialAuthData = {
    wishlist: [],
    cart: [],
    toastData: {
        status: "",
        display: false,
        data: ""
    },
    addressData: [],
    loggedIn: false,
    testLogin: false,
    userName: "Profile",
    userId: "",
    isError: false,
    errorMessage: "",
    cartStatus: "",
    wishlistStatus: "",
}

const AuthContext = createContext(initialAuthData);

const AuthProvider = ({children}) => {

    const [authState, authDispatch] = useReducer(authReducer, initialAuthData);

    const signup = async(userDetails) => {
        try{
            const response = await axios.post("/api/auth/signup", {
                firstName: userDetails.firstName,
                lastName: userDetails.lastName,
                email: userDetails.email,
                password: userDetails.password
            })
            localStorage.setItem("token", response.data.encodedToken);
            if(response.status === 201){
                authDispatch({type: "SUCCESS_TOAST", payload: {name:response.data.createdUser.firstName, toastMessage:"Signed up", id:response.data.createdUser._id, wishlistData:[], cartData:[] }})
            }         
        }catch(error){
            authDispatch({type: "LOGIN_ERROR", payload: {toastMessage: "Email already exists"}})
        }
        
    }

    const login = async(userDetails) => {
        try{
            const response = await axios.post("/api/auth/login", {
                email: userDetails.email,
                password: userDetails.password
            })
            localStorage.setItem("token", response.data.encodedToken)
            const config = {
                headers:{
                    authorization: localStorage.getItem("token")
                }
            }
        
            const wishlistResponse = await axios.get("/api/user/wishlist",config)
            const cartResponse = await axios.get("/api/user/cart", config)
            const addressResponse = await axios.get("/api/user/address", config)

            if(wishlistResponse.status === 200 && cartResponse.status === 200 && addressResponse.status === 200){
                authDispatch({type: "SUCCESS_TOAST", payload: {name:response.data.foundUser.firstName, toastMessage:"Logged in", id:response.data.foundUser._id, wishlistData: wishlistResponse.data.wishlist, cartData: cartResponse.data.cart, addressData: addressResponse.data.userAddress}})
            }
            
            else if(wishlistResponse.status === 404 || cartResponse.status === 404){
                authDispatch({type: "HANDLER_FAIL", payload: { toastMessage:"Data fetch failed" } })
            }

        }catch(error){
            authDispatch({type: "LOGIN_ERROR", payload: {toastMessage: "Invalid credentials"}})
        }
    }

    const testLogin = async() => {    
        try{
            const response = await axios.post("api/auth/login", {
                email: "testlogin@gmail.com",
                password: "test123"
            })
            
            localStorage.setItem("token", response.data.encodedToken)

            const config = {
                headers:{
                    authorization: localStorage.getItem("token")
                }
            }

            const defaultAddress = {
                name: "JohnDoe",
                street:
                "#Flat 003, 1st Floor, Jayanagar",
                city: "Bangalore",
                state: "Karnataka",
                country: "India",
                zipCode: 560011,
                mobile: 9876543210,
            }
 
            const wishlistResponse = await axios.get("/api/user/wishlist",config)
            const cartResponse = await axios.get("/api/user/cart", config)
            const getAddress =await axios.get(
                "/api/user/address",
                config
                )
            
            if(getAddress.data.address.length === 0){
                const addressResponse = await axios.post(
                    "/api/user/address",
                    {address: defaultAddress} ,
                    config
                    )
                if(wishlistResponse.status === 200 && cartResponse.status === 200 && addressResponse.status === 201){
                    authDispatch({type: "TEST_LOGIN", payload: {name:response.data.foundUser.firstName, toastMessage:"Logged in", id:response.data.foundUser._id, wishlistData: wishlistResponse.data.wishlist, cartData: cartResponse.data.cart, addressData: addressResponse.data.userAddress} })
                }
            }
                
            if(wishlistResponse.status === 200 && cartResponse.status === 200){
                authDispatch({type: "TEST_LOGIN", payload: {name:response.data.foundUser.firstName, toastMessage:"Logged in", id:response.data.foundUser._id, wishlistData: wishlistResponse.data.wishlist, cartData: cartResponse.data.cart} })
            }
            
            else if(wishlistResponse.status === 404 || cartResponse.status === 404){
                authDispatch({type: "HANDLER_FAIL", payload: { toastMessage:"Data fetch failed" } })
            }
           
        }catch(error){
            authDispatch({type: "LOGIN_ERROR", payload: {toastMessage: "Email exists"}})
        }
    }

    const logout = () => {
        localStorage.clear();
        authDispatch({type: "LOGOUT", payload: { toastMessage: "Logged out", id: ""}})
    }

    return(
        <AuthContext.Provider value={{authState, authDispatch, signup, login, testLogin, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth } 