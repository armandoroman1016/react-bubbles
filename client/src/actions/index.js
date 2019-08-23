import axios from 'axios'
import { axiosWithAuth } from '../utils/utils'


export const LOG_IN_START = 'LOG_IN_START';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';

export const logInAttempt = ( credentials ) => {

    return dispatch =>{
        dispatch({ type: LOG_IN_START })
        axios
            .post('http://localhost:5000/api/login', credentials)
            .then( res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                dispatch({ type: LOG_IN_SUCCESS })
            })
            .catch( err => dispatch({type: LOG_IN_ERROR, payload: err.response}))
    }
}

export const GET_COLORS_START = 'GET_COLORS_START'
export const GET_COLORS_SUCCESS = 'GET_COLORS_SUCCESS'
export const GET_COLORS_ERROR = 'GET_COLORS_ERROR'

export const getColors = () => {
    return dispatch => {
        dispatch({type : GET_COLORS_START})
        axiosWithAuth()
            .get('http://localhost:5000/api/colors')
            .then( res => dispatch({ type: GET_COLORS_SUCCESS, payload: res.data}))
            .catch( err => dispatch({type: GET_COLORS_ERROR, payload: err.response}))
    }
}

export const UPDATE_COLOR_START = 'UPDATE_COLOR_START'
export const UPDATE_COLOR_SUCCESS = 'UPDATE_COLOR_SUCCESS'
export const UPDATE_COLOR_ERROR = 'UPDATE_COLOR_ERROR'

export const updateColorChange = (id, values) => {
    return dispatch => {
        dispatch({type : UPDATE_COLOR_START})
        axiosWithAuth()
            .put(`http://localhost:5000/api/colors/${id}`, values)
            .then( res => dispatch({ type: UPDATE_COLOR_SUCCESS, payload: res.data}))
            .catch( err => dispatch({type: UPDATE_COLOR_ERROR, payload: err.response}))
    }
}

export const DELETE_COLOR_START = 'DELETE_COLOR_START'
export const DELETE_COLOR_SUCCESS = 'DELETE_COLOR_SUCCESS'
export const DELETE_COLOR_ERROR = 'DELETE_COLOR_ERROR'


export const deleteColorAttempt = id =>{
    return dispatch => {
        dispatch({type: DELETE_COLOR_START})
        axiosWithAuth()
            .delete(`http://localhost:5000/api/colors/${id}`)
            .then( res => dispatch({type: DELETE_COLOR_SUCCESS, payload:id}))
            .catch( err => console.log(err))
    }
} 