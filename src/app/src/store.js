import { applyMiddleware, createStore } from "redux"

import createlogger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers/combineReducers"

const middleware = applyMiddleware(promise(), thunk, createlogger)

export default createStore(reducer, middleware)