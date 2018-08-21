import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import smartComponent from './state/smartComponent'
import thunk from 'redux-thunk'
import users from './state/users'

//kazdy reducer odpowiada za wycinek w tym przypadki smartComponent i users (reducer reaguje na akcje i zwraca nowy stan)
const reducer = combineReducers({
    smartComponent,
    users
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)