import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {thunk} from 'redux-thunk'
import {reducer as todoReducer} from './todo reducer/reducer'

const rootReducer = combineReducers({
    todoReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))