//STEP ONE: import store
import { createStore, applyMiddleware } from 'redux'
//import reducer
import reducer from './reducers'

import thunk from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk));

export default store; 