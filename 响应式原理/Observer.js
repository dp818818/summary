import defineReactive from "./defineReactive.js"
import def from './utils.js'
import { arrayMethods } from './array.js'
import observe from "./observe.js";
import Dep from "./Dep.js";
export default class Observer {
    constructor(value) {
        //给对象加上__ob__属性，不可枚举，这里的this是Observer的实例
        def(value, '__ob__', this, false);
        //每个实例上都有dep
        this.dep = new Dep()
        //判读是数组还是对象
        if (Array.isArray(value)) {
            //arrayMethods是重写的7个数组方法，arrayMethods.__proto__是Array.prototype， Array.prototype上有原始的数组方法
            Object.setPrototypeOf(value, arrayMethods)
            this.observeArray(value)
            //value.__proto__ = arrayMethods
            // console.log(value)

        } else {
            this.walk(value);
        }
    }
    walk(value) {
        //遍历对象，将每个对象中的属性都去defineReactive，响应式一样
        for (let key in value) {
            defineReactive(value, key, value[key]);
        }
    }
    observeArray(value) {
        //遍历数组，让数组中属性都响应式
        let l = value.length;
        for (let i = 0; i < l; i++) {
            observe(value[i]);
        }
    }
}