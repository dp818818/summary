import { createStore,applyMiddleware  } from 'redux';
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
import countReducer from './count_reducer';
export default createStore(countReducer,applyMiddleware(thunk));