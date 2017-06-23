import { applyMiddleware, createStore } from "redux"

import createlogger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers/combineReducers"
import seqSink from 'structured-log-seq-sink';
import config from './config';

const serilogMiddleware = (store) => (next) =>(action) => {
    const structuredLog = require('structured-log');
    var logger = structuredLog.configure()
        .writeTo(seqSink({ url: "http://localhost:5341"}))
        .create();

        if(typeof(action) === 'object'){
            logger.info('Receive action {@action}', action);
        }else{
            logger.info('Receive action {action}', action);
        }
        
        next(action);
}

let middleware = applyMiddleware(promise(), thunk, createlogger);
if (config.log_to_seq){
    console.log('log to seq');
    middleware = applyMiddleware(serilogMiddleware, promise(), thunk, createlogger);
}

var store = createStore(reducer, middleware);
window.store = store;
export default store;