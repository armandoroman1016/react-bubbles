import {
    LOG_IN_START, 
    LOG_IN_SUCCESS, 
    LOG_IN_ERROR,
    GET_COLORS_START,
    GET_COLORS_SUCCESS,
    GET_COLORS_ERROR,
    UPDATE_COLOR_START,
    UPDATE_COLOR_SUCCESS,
    UPDATE_COLOR_ERROR,
    DELETE_COLOR_START,
    DELETE_COLOR_SUCCESS,
    DELETE_COLOR_ERROR
}   from '../actions'

const initialState = {
    colors: [],
    error: '',
    isLoggingIn : false,
    hasToken: false,
    gettingData: false,
    editingColor: false,

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
        case GET_COLORS_START:
                return{
                    ...state,
                    gettingData: true,
                    hasToken: true
                }
        case GET_COLORS_SUCCESS:
            return{
                ...state,
                colors: action.payload,
                gettingData: false
            }
        case GET_COLORS_ERROR:
            return{
                ...state,
                error: action.payload,
                gettingData: false
            }
        case UPDATE_COLOR_START:
            return{
                ...state, gettingData: true
            }
        case UPDATE_COLOR_SUCCESS:
            return{
                ...state,
                gettingData: false,
                colors: state.colors.map( color => {
                    if(color.id === action.payload.id){
                        return action.payload
                    }else{
                        return color
                    }
                })
            }
        case UPDATE_COLOR_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case DELETE_COLOR_START:
            return{
                ...state
            }
        case DELETE_COLOR_SUCCESS:
            return{
                ...state,
                colors: state.colors.filter( color => {
                    if(color.id !== action.payload){
                        return color
                    }
                })
            }
        case DELETE_COLOR_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default :
            return state 
    }
}
