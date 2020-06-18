import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const rootReducer = combineReducers({})

const composeEnhancers = composeWithDevTools({})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
)

// store.dispatch('action', payload)

export default store