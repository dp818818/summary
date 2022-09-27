function object(obj){
    function Fn(){}
    Fn.prototype = obj
    return new Fn()
}


function createAnother(original){
      let clone = object(original)
      clone.getName = function(){
        console.log('寄生式继承')
      }
      return clone
} 

let parent = {
    name:'dp',
    age:18
}

let child = createAnother(parent)

console.log(child.name) //dp
child.getName() //寄生式继承
