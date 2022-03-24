export const authReducer = (state, { type, payload }) => {
    switch(type) {
        // login and signup
        case "SUCCESS_TOAST":
            return{...state, toastData: {...state.toastData, status:"added", display: true, data: payload.toastMessage}, loggedIn: true, userName: payload.name, userId: payload.id, wishlist: [...payload.wishlistData], cart: [...payload.cartData]} 

        case "REMOVE_TOAST":
            return{...state, toastData: {...state.toastData, display: false}}
        
        case "TEST_LOGIN":
            return{...state, toastData: {...state.toastData, status:"added", display: true, data: payload.toastMessage}, loggedIn: true, testLogin: true, userName: payload.name, userId: payload.id, wishlist: [...payload.wishlistData], cart: [...payload.cartData]} 

        case "LOGIN_ERROR":
            return{...state, toastData: {...state.toastData, status:"removed", display: true, data: payload.toastMessage}}

        case "LOGOUT":
            return{...state, toastData: {...state.toastData, status:"removed", display: true, data: payload.toastMessage}, loggedIn: false, testLogin: false, userName: "Profile", userId: payload.id, wishlist:[], cart: []}

        //wishlist 
        case "ADD_TO_WISHLIST":
            return{...state, toastData: {...state.toastData, status:"added", display: true, data: payload.toastMessage}, wishlist: payload.data}

        case "REMOVE_FROM_WISHLIST":
            return{...state, toastData: {...state.toastData, status:"removed", display: true, data: payload.toastMessage}, wishlist: payload.data}

        //cart
        case "ADD_TO_CART":
            return{...state, toastData: {...state.toastData, status:"added", display: true, data: payload.toastMessage}, cart: payload.data} 
        
        case "REMOVE_FROM_CART":
            return{...state, toastData: {...state.toastData, status:"removed", display: true, data: payload.toastMessage}, cart: payload.data} 

        case "UPDATE_CART":
            return{...state, toastData: {...state.toastData, status:"added", display:true, data: payload.toastMessage}, cart: payload.data}

        case "HANDLER_FAIL":
            return{...state, toastData: {...state.toastData, status:"removed", display:true, data: payload.toastMessage}}

        default :
            return state;
    }
}