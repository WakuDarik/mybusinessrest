import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import authReducer from './auth-reducer'

const { createStore, combineReducers, applyMiddleware } = require("redux")

let reducerBox = combineReducers({
    auth: authReducer,
    form: formReducer,
})

let store = createStore(reducerBox, applyMiddleware(thunkMiddleware))

window.store = store

export default store