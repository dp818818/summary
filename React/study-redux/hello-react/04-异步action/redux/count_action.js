import { INCREMENT, DECREMENT } from './constant'
//同步action，就是指action的值为Object类型的一般对象
export const INCREMENTACTION = (data) => { return { type: INCREMENT, data } };
export const DECREMENTACTION = (data) => { return { type: DECREMENT, data } };


//异步action,就是action值为函数，异步action中一般都会调用同步action，异步action不是必须要用的。
export const ASYNCACTION = (data,time) =>{
  return (dispatch)=>{
    setTimeout(()=>{
        dispatch(INCREMENTACTION(data))
    },time)
  }
}