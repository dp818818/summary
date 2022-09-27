function object(obj){
   function Fn(){}
   Fn.prototype = obj
   return new Fn()
}



//不推荐  就是Object.create()


let a = {}

let b =[]

a.__proto__.name = '十八'

let c = ''
let d = '2022/60/30'


console.log(c.name)  //十八

console.log(d.name)  //十八