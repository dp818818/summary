//引入action
import { INCREMENT, DECREMENT } from './constant'
//状态默认值
const initState = 0;
export default function countRuducer(preState=initState, action) {
    const { type, data } = action;
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}