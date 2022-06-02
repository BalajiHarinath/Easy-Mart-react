import { createContext, useContext, useState, useReducer } from "react";
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
    useremail: "",
    isError: false,
    errorMessage: "",
    cartStatus: "",
    wishlistStatus: "",
}

const AuthContext = createContext(initialAuthData);

const AuthProvider = ({children}) => {

    const [authState, authDispatch] = useReducer(authReducer, initialAuthData);
    const [isloading, setIsLoading] = useState(false);

    const signup = async(userDetails) => {
        try{
            setIsLoading(true)
            const response = await axios.post("/api/auth/signup", {
                firstName: userDetails.firstName,
                lastName: userDetails.lastName,
                email: userDetails.email,
                password: userDetails.password
            })
            localStorage.setItem("token", response.data.encodedToken);
            if(response.status === 201){
                authDispatch({type: "SUCCESS_TOAST", payload: {name:response.data.createdUser.firstName, toastMessage:"Signed up", id:response.data.createdUser._id, email: response.data.createdUser.email, wishlistData:[], cartData:[] }})
                setIsLoading(false)
            }                  
        }catch(error){
            authDispatch({type: "LOGIN_ERROR", payload: {toastMessage: "Email already exists"}})
            setIsLoading(false)
        }
        
    }

    const login = async(userDetails) => {
        try{
            setIsLoading(true)
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
                    authDispatch({type: "SUCCESS_TOAST", payload: {name:response.data.foundUser.firstName, toastMessage:"Logged in", id:response.data.foundUser._id, email: response.data.foundUser.email, wishlistData: wishlistResponse.data.wishlist, cartData: cartResponse.data.cart, addressData: addressResponse.data.userAddress} })
                    setIsLoading(false)
                }
            }

            if(wishlistResponse.status === 200 && cartResponse.status === 200){
                authDispatch({type: "SUCCESS_TOAST", payload: {name:response.data.foundUser.firstName, toastMessage:"Logged in", id:response.data.foundUser._id, email: response.data.foundUser.email, wishlistData: wishlistResponse.data.wishlist, cartData: cartResponse.data.cart}})
                setIsLoading(false)
            }
            
            else if(wishlistResponse.status === 404 || cartResponse.status === 404){
                authDispatch({type: "HANDLER_FAIL", payload: { toastMessage:"Data fetch failed" }})
                setIsLoading(false)
            }

        }catch(error){
            authDispatch({type: "LOGIN_ERROR", payload: {toastMessage: "Invalid credentials"}})
            setIsLoading(false)
        }
    }

    const testLogin = async() => {    
        try{
            setIsLoading(true)
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
                    authDispatch({type: "TEST_LOGIN", payload: {name:response.data.foundUser.firstName, toastMessage:"Logged in", id:response.data.foundUser._id, email: response.data.foundUser.email, wishlistData: wishlistResponse.data.wishlist, cartData: cartResponse.data.cart, addressData: addressResponse.data.userAddress} })
                    setIsLoading(false)
                }
            }
                
            if(wishlistResponse.status === 200 && cartResponse.status === 200){
                authDispatch({type: "TEST_LOGIN", payload: {name:response.data.foundUser.firstName, toastMessage:"Logged in", id:response.data.foundUser._id, email: response.data.foundUser.email, wishlistData: wishlistResponse.data.wishlist, cartData: cartResponse.data.cart} })
                setIsLoading(false)
            }
            
            else if(wishlistResponse.status === 404 || cartResponse.status === 404){
                authDispatch({type: "HANDLER_FAIL", payload: { toastMessage:"Data fetch failed" } })
                setIsLoading(false)
            }
           
        }catch(error){
            authDispatch({type: "LOGIN_ERROR", payload: {toastMessage: "Email exists"}})
            setIsLoading(false)
        }
    }

    const logout = () => {
        localStorage.clear();
        authDispatch({type: "LOGOUT", payload: { toastMessage: "Logged out", id: ""}})
    }
    
    return(
        <AuthContext.Provider value={{authState, authDispatch, signup, login, testLogin, logout, isloading}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth } 