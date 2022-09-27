import h from './h.js';
import patch from './patch.js'
/**
 *   <div>这是一个虚拟节点</div>
 */

// h('div', {}, '这是一个虚拟节点');


/**
 * <div>
 *   <p>这是一个虚拟节点</p>
 * </div>
 * 
 * let v1 = h('div', {key:'v1'}, [
    h('p',{key:'p'},'这是一个虚拟节点')
   ]);

 * 
 */
// let v1 = h('div', {key:'v1'}, 'div节点');


let contain = document.getElementById('contain')
let btn = document.getElementById('btn')

let v1 = h('div', { key: 'key' }, [
    h('div',{key:'999'},'999'),
    h('div',{key:'888'},'888'),
    h('div',{key:'777'},'777'),
]);

patch(contain, v1)



let v2 = h('div', { key: 'key' }, [
    h('div',{key:'111'},'111'),
    h('div',{key:'999'},'999'),
    h('div',{key:'888'},'888'),
    h('div',{key:'666'},'666'),
    h('div',{key:'777'},'777'),
    h('div',{key:'333'},'333'),
    h('div',{key:'222'},'222')
]);


btn.onclick = function () {
    patch(v1, v2)
}