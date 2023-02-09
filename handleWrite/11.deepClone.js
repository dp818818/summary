function deepClone(object){
   if(!object || typeof object !== 'object'){
      return object
   }
   let newObject = Array.isArray(object) ? [] : {}
   for(let key in object){
      // 避免将原型链上的属性拷贝了 
      if(object.hasOwnProperty(key)){
        newObject[key] = typeof object[key] === 'object' ? deepClone(object[key]) :  object[key]
      }     
   }
   return newObject;
}





let obj1 = {
    name:'zs',
    family:{
        father:'zy',
        mom:'ls',
        brother:'ze'
    }
}


let obj2 = deepClone(obj1);
obj2.name = 'ww';
obj2.family.father = 'wl'
console.log(obj2)
console.log(obj1)