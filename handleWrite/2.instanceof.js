// obj instanceof F   判断构造函数的原型（prototype）是否出现在对象的原型链上  
function myInstanceof(left,right){
    let  proto = Object.getPrototypeOf(left);  
    let  prototype = right.prototype;
    
    while(true){
        // 对象的原型链最顶端为null,最顶端还未找到，返回false
        if(!proto){
           return false   
        }
        if(proto === prototype){
           return true
        }
        // 继续查看下一级原型链
        proto = Object.getPrototypeOf(proto);
    }
}