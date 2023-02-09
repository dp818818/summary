// Object.create(obj)  已对象obj为原型链创建一个新的对象  newObj.__proto__ = obj
function create(obj){
   function F(){}
   F.prototype = obj   //f.__proto__ = F.prototype = obj
   return new F()
}