import createElement from "./createElement.js";
import updateChildren from './updateChildren.js'

export default function patchVnode(oldVnode,newVnode){
    // 判断新旧vnode是否是同一个对象
    if (oldVnode === newVnode) return;
   //判断newVnode是否为text节点
   if(newVnode.text != undefined && (newVnode.children == undefined || newVnode.children.length == 0)){
        //newVnode是text节点
        if (newVnode.text != oldVnode.text) {
          oldVnode.elm.innerText = newVnode.text;
        }
   }else{
      //newVnode不是text节点  有children []
      //判断oldVnode是不是文本节点 
      let ch = newVnode.children;
      if(oldVnode.text != undefined && (oldVnode.children == undefined || oldVnode.children.length == 0)){
          oldVnode.elm.innerText = ''
          for(let i=0;i<ch.length;i++){
            oldVnode.elm.parentNode.appendChild(createElement(ch[i])); 
          }
      }else{
          //这块是最小量更新判断的核心算法
          //新旧虚拟节点都有children
          updateChildren(oldVnode,newVnode)
      }
   }
}