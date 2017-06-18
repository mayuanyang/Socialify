import { applyMiddleware, createStore } from "redux"

import createlogger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers/combineReducers"
import seqSink from 'structured-log-seq-sink';

const serilogMiddleware = (store) => (next) =>(action) => {
    
    const structuredLog = require('structured-log');
    var logger = structuredLog.configure()
  .writeTo(seqSink({ url: "http://localhost:5341"}))
  .create();
  logger.info('Receive action {@action}', action);
  next(action);
}

const dummyMiddleware1 = (store) => (next) =>(action) => {
    const structuredLog = require('structured-log');
    var logger = structuredLog.configure()
  .writeTo(seqSink({ url: "http://localhost:5341"}))
  .create();
  logger.info('dummy1');
  next(action);
}

const dummyMiddleware2 = (store) => (next) =>(action) => {
    const structuredLog = require('structured-log');
    var logger = structuredLog.configure()
  .writeTo(seqSink({ url: "http://localhost:5341"}))
  .create();
  logger.info('dummy2');
  next(action);
}


const middleware = applyMiddleware(serilogMiddleware, dummyMiddleware2, dummyMiddleware1, promise(), thunk, createlogger)

var store = createStore(reducer, middleware);
window.store = store;
export default store;