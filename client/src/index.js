import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import { reducer } from './reducers'

const store = createStore(reducer, applyMiddleware(thunk, logger))


const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    rootElement);
