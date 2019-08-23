import React, { useEffect } from 'react'
import { Form , Field, withFormik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { logInAttempt } from '../actions'

const LoginForm = props => {

    useEffect(()=> {
        if(props.hasToken && !props.isLoggingIn){
            props.history.push('/bubbles')
        }
    })

    return(
        <Form>
        <h2>React-Bubbles Login</h2>
            <Field name = 'username' type = 'text' placeholder = 'Username. . .'/>
            <Field name = 'password' type = 'password' placeholder = 'Password. . .'/>
            <button type = 'submit'>Log In</button>
        </Form>
    )
}

const FormikLogin = withFormik({
    mapPropsToValues({username, password}){
        return{
            username: username || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Enter your username to continue'),
        password: Yup.string().required('Enter your password to continue')
    }),
    handleSubmit(values, props){
        const dataToPost = {
            username: values.username,
            password: values.password
        }
        props.props.logInAttempt(dataToPost)

    }
})(LoginForm)

const mapStateToProps = state => {
    return {
        isLoggingIn: state.isLoggingIn,
        hasToken: state.hasToken
    }
}

export default connect(mapStateToProps, { logInAttempt })(FormikLogin)