export const authReducer = (state, { type, payload }) => {
    switch(type) {
        case "SUCCESS_TOAST":
            return{...state, toastData: {...state.toastData, status:"added", display: true, data: payload.toastMessage}, loggedIn: true, userName: payload.name, userId: payload.id} 

        case "REMOVE_TOAST":
            return{...state, toastData: {...state.toastData, display: false}}
        
        case "TEST_LOGIN":
            return{...state, toastData: {...state.toastData, status:"added", display: true, data: payload.toastMessage}, loggedIn: true, testLogin: true, userName: payload.name, userId: payload.id} 

        case "LOGOUT":
            return{...state, toastData: {...state.toastData, status:"removed", display: true, data: payload.toastMessage}, loggedIn: false, userName: "Profile", userId: payload.id}

        default :
            return state;
    }
}