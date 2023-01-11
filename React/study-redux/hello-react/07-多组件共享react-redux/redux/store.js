import { createStore,applyMiddleware,combineReducers } from 'redux';
import countReducer from './reducers/count';
import personReducer from './reducers/person';

// 引入异步处理
import thunk  from 'redux-thunk'

//汇总所有的reducer变为一个总的reducer 合并为对象形式
const allReducers = combineReducers({
    count:countReducer,
    person:personReducer
});

export default createStore(allReducers,applyMiddleware(thunk));