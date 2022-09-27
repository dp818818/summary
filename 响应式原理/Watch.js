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
        //Dep.target是全局的属性  是Watch{}
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