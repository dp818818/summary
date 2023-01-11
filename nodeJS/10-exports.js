// module是一个对象，里面有exports属性
// console.log(module);


//commonJS 模块化  
console.log(exports);  //{}
console.log(module.exports); //{}
console.log(exports === module.exports); //true  虽然exports和module.exports一样  但是以module.exports导出的属性为主


module.exports = {
  nickName:'ls',
  age:18
}

exports = {
   name:'zs'
}