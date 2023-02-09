function myNew(Fn,...args){
    let obj = {};
    obj.__proto__ = Fn.prototype;
    let value = Fn.call(obj,...args);
    return  value instanceof Object ? {} : value   //构造函数返回引用类型的话，new之后的实例就是{}
}