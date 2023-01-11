/**
 * 单独生成action对象
 * action就是你要执行的操作类型，这里定义两个操作 加与减
 */
//引入常量或者也可以自己随便定义
import { INCREMENT, DECREMENT } from './constant'
export const INCREMENTACTION = data => ({ type: INCREMENT, data });  //返回对象 type：操作类型，data:传入要操作的数据
export const DECREMENTACTION = data => ({ type: DECREMENT, data });