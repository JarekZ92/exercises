import { createStore, combineReducers, compose } from 'redux'
import smartComponent from './state/smartComponent'

const reducer = combineReducers({
    smartComponent
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers()
)