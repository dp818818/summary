/**
 * 一个项目只有一个store.js
 */

import { createStore } from 'redux';

import countReducer  from './count_reducer';

export default createStore(countReducer);