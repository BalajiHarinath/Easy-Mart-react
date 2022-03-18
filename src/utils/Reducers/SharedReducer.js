export const SharedReducer = (state, { type, payload }) => {
    switch(type) {
        case "ACTION_TYPE_LOADING" : 
            return {...state, status:"loading"};

        case "ACTION_TYPE_SUCCESS" :
            return {...state,  status:"success", data:payload};
           
        case "ACTION_TYPE_ERROR" :
            return {...state, status:"error", data:payload};
            
        default :
            return state;
    }
}