import Dep from "./Dep.js";

export default class Watch{
    constructor(target,exp,callBack){
       //对象 
       this.target = target;
       //getter 这个是根据key获取val的function
       this.getter = this.parseExp(exp);
       //回调函数
       this.cb = callBack;
       //值
       this.value = this.get();
    }
    // 解析成对象格式
    parseExp(exp){
        var segments = exp.split('.');
        return (obj) => {
            for (let i = 0; i < segments.length; i++) {
                if (!obj) return;
                obj = obj[segments[i]]
            }
            return obj;
        };
    }
    get(){
        //Dep.target是全局的属性  是Watch{}   getter中收集依赖  setter中通知依赖更新  
        //我们先设置一个全局的属性Dep.target，然后赋值为Watch实例，后面（下一步）读取数据时，会触发getter，我们在getter中，将这个Watch添加到Dep中，收集了这个Watch,再将这个Dep.target制空
        //当更新数据时，我们再通知这个Watch
        Dep.target = this;
        const obj = this.target;
        let value;
        try{
            value = this.getter(obj);  
        }finally{
            Dep.target  = null;  
        }
     
        return value;
    }
    //set时触发
    update(){
       this.getAndInvoke(); 
    }
    //只有改变了  才会触发cb,需要判断一下新旧值
    getAndInvoke(){
        //获取Object.defineProperty set之后的值
        const value = this.get();
        if( value != this.value || typeof value == 'object' ){
            //在vue中 $watch() 会返回新旧值
            const oldVal = this.value;
            //将新增更新
            this.value = value;
            this.cb.call(this.target,oldVal,value);
        } 
    }

}