export const initialState = "" ;

export const userReducer = (state, action) => {
    if(action.type === "USER"){
        return action.payload
    }
    return state
}

