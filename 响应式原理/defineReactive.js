import observe from "./observe.js";
import Dep from "./Dep.js";
export default function defineReactive(data, key, value) {
    //继续将value响应式，如果value是基础类型，直接返回，如果是对象，继续Observer也会走到这里，直到所有的属性都是响应式
    let child =  observe(value);
    
    let dep = new Dep()
    
    Object.defineProperty(data, key, {
        //可枚举
        enumerable: true,
        //可删除
        configurable: true,
        get(){
            console.log(`${key}被读取了，${value},get`);
            if(Dep.target){
                //收集依赖
                dep.depend();
                if(child){
                    //实例上都有dep属相在observer上添加的
                    child.dep.depend();
                } 
            }
            return value;
        },
        set(newVal){
            console.log(`${key}被更改了,${newVal},set `);
            value = newVal;
            //设置新值，也需要observe变为响应式的
            child = observe(value);
            //发布订阅
            dep.notice();
        }
    })
}


