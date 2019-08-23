import axios from 'axios'

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