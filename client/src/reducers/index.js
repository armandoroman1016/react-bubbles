import {
    LOG_IN_START, 
    LOG_IN_SUCCESS, 
    LOG_IN_ERROR,
}   from '../actions'

const initialState = {
    colors: [],
    error: '',
    isLoggingIn : false,
    hasToken: false,
}

export const reducer = (state = initialState, action ) => {
    switch(action.type){
        case LOG_IN_START:
            return{
                ...state,
                isLoggingIn : true,
            }
        case LOG_IN_SUCCESS:
            return{
                ...state,
                isLoggingIn: false,
                hasToken: true
            }
        case LOG_IN_ERROR:
            return{
                ...state,
                isLoggingIn: false,
                hasToken: false,
                error: action.payload
            }
        default :
            return state 
    }
}
