// 创建虚拟dom Vnode

/**
 * 
 * @param {*} sel 虚拟节点名称 tagName
 * @param {*} data  虚拟节点上的属性  如：key props...
 * @param {*} children  虚拟节点的子节点
 * @param {*} text 虚拟节点的文本 innerText
 * @param {*} elm  虚拟节点的真正dom 
 * @returns 
 */
export default function(sel,data,children,text,elm){
    const key = data.key;
    return {
        sel,data,children,text,key,elm
    }
}