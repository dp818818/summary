import observe from './observe.js'
import Watch from './Watch.js';

let  obj = {
    a:888,
    b:{
        c:{
            d:999
        }
    },
    e:[11,22,33,44]
}

observe(obj);

// new Watch(obj,'e',(oldVal,newVal)=>{
//     console.log(`${oldVal}改变为${newVal}`)
// })

// obj.e = [55,66];
obj.e.push(55)


/**
 * 首先object.defineProperty是可以get与set数组但无法监听数组的操作，
 * 源码中是对7个数组的方法进行了重写，分别是 'pop', 'push', 'unshift', 'shift', 'splice', 'sort', 'reverse'
 * 我们只是想对数组的方法进行一部分的操作，如将添加的数据响应式，所以我们应该保留数组原有的方法。
 * 所以需要将原有的方法设为新方法的原型。
 * 
*/

