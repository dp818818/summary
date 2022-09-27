import Vnode from "./Vnode.js";
// 将tokens转成虚拟dom
//我们来写一个简易版的diff，所以就不考虑特殊的情况，这个是功能比较弱的版本，但是可以体现diff算法的
/**
 * 三个参数，第一个是tagName, 第二个是节点上的属性  如：<div  key='myKey'  ></div>,第三个是节点内的文本或子节点 
 * 
 * 1.h('div',{},'苹果')
 * 2.h('div',{},[
 *   h('div',{},'西瓜')
 * ])
 * 
 */

export default function h(sel, data, kind) {
    if (arguments.length != 3) alert('参数传递错误')
    if (typeof kind == 'string' || typeof kind == 'number') {
        //kind是文本
        return Vnode(sel, data, undefined, kind, undefined);
    } else if (Array.isArray(kind)) {
        //kind是子节点chuildren []
        let children = [];
        for (let i = 0; i < kind.length; i++) {
            children.push(kind[i])
        };
        return Vnode(sel, data, children, undefined, undefined);
    } else if (Object.prototype.toString.call(kind) == '[object Object]' && kind.hasOwnproperty('sel')) {
        // h()返回的是一个对象 所以用此判断
        let children = [kind]
        return Vnode(sel, data, children, undefined, undefined);
    }
}

/**
 * Array.isArray(kind) 这个地方很巧妙，但是也很绕，当kind为数组时，我们去遍历这个数组，
 * 里面得 h(...)函数 ，函数是自行调用的，所以得到的其实就是vnode对象，push到children []中 
 * 当子节点 h(...)中也有children, 也会走到这里，得到一个子节点的子节点vnode对象(递归)，直至没有children,返回的是文本节点为止
 */

