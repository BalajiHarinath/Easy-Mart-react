import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { authReducer } from "../utils";

const initialAuthData = {
    wishlist: [],
    cart: [],
    toastData: {
        status: "",
        display: false,
        data: ""
    },
    loggedIn: false,
    testLogin: false,
    userName: "Profile",
    userId: "",
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
            authDispatch({type: "SUCCESS_TOAST", payload: {name:response.data.createdUser.firstName, toastMessage:"Signed up", id:response.data.createdUser._id }})
        }catch(error){
            console.log(error.response);
        }
        
    }

    const login = async(userDetails) => {
        try{
            const response = await axios.post("/api/auth/login", {
                email: userDetails.email,
                password: userDetails.password
            })
            localStorage.setItem("token", response.data.encodedToken)
            authDispatch({type: "SUCCESS_TOAST", payload: {name:response.data.foundUser.firstName, toastMessage:"Logged in", id:response.data.foundUser._id}})
        }catch(error){
            console.log(error.response);
        }
    }

    const testLogin = async() => {
        try{
            const response = await axios.post("api/auth/login", {
                email: "testlogin@gmail.com",
                password: "test123"
            })
            console.log(response.data.foundUser.firstName)
            localStorage.setItem("token", response.data.encodedToken)
            authDispatch({type: "TEST_LOGIN", payload: {name:response.data.foundUser.firstName, toastMessage:"Logged in", id:response.data.foundUser._id} })
        }catch(error){
            console.log(error);
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