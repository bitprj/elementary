import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import teacherState from './Teacher/reducer'
import studentState from './Student/reducer'

const reducer = combineReducers({
    teacherState,
    studentState,
})

const middleware = applyMiddleware(thunk)

const store = createStore(reducer, middleware)

export default store
