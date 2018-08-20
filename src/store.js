import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import smartComponent from './state/smartComponent'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    smartComponent
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)