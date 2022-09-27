import createElement from "./createElement.js";
import Vnode from "./Vnode.js";
import patchVnode from './patchVnode.js'

/**
 * diff算法开始
 * 
 * diff算法始终是比对新旧虚拟dom，对旧dom做patch
 */

export default function patch(oldVnode, newVnode) {
    /**假如oldVnode不是虚拟dom  手动去创建一个子节点*/
    //如第一次初始化的时候
    if (oldVnode.sel == undefined) {
        oldVnode = Vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
    }
    //判断新旧虚拟节点sel,key是否相等
    if(oldVnode.sel == newVnode.sel && oldVnode.key == newVnode.key ){
        //相等，进一步去判断
        patchVnode(oldVnode,newVnode)
    }else{
        //不相等,暴力删除旧，替换新
        let newElement = createElement(newVnode);
        if(oldVnode.elm){
            oldVnode.elm.parentNode.insertBefore(newElement,oldVnode.elm);
        }
        oldVnode.elm.parentNode.removeChild(oldVnode.elm);
    }
}