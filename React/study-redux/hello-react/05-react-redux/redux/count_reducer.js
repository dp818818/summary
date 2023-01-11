import { INCREMENT, DECREMENT } from './constant'
const initState = 0;
export default function countReducer(perState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case INCREMENT:
            return perState + data;
        case DECREMENT:
            return perState - data;
        default:
            return perState;
    }
}