/**
 * 1.创建一个为count服务的reducer,reducer本质为一个函数
 * 2.reducer会接收两个参数，preState(之前的状态)，action(动作对象)
 */

const initState = 0 //初始化状态
export default function countReducer(preState = initState, action) {
    //从action对象中获取：type、data  
    const { type, data } = action
    switch (type) {
        case 'increment':
            return preState + data;
        case 'decrement':
            return preState - data;
        default:
            return preState;
    }
}