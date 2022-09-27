//根据虚拟dom 创建真正的dom节点
export default function createElement(Vnode) {
    let tagName = document.createElement(Vnode.sel.toLowerCase());
    //节点添加属性
    for(let key in Vnode.data){
        tagName.setAttribute(key,Vnode.data[key])
    }
    
    if (Vnode.text != undefined && (Vnode.children == undefined || Vnode.children.length == 0)) {
        //没有子节点  文本节点
        tagName.innerText = Vnode.text;
    } else if ( Array.isArray(Vnode.children) && Vnode.children.length > 0) {
        //有字节点
        for(let i=0;i<Vnode.children.length;i++){
           //子节点需要递归，因为子节点是嵌套的
           let ch = Vnode.children[i];
           tagName.appendChild(createElement(ch));  //递归添加
        }
    }
    Vnode.elm = tagName;
    return Vnode.elm;   //elm  虚拟节点对应的真实dom
}


