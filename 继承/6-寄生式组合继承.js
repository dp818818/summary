function Extends(sub,sup){
    sub.prototype = Object.create(sup.prototype)
    sub.prototype.constructor =  sub
}
function Parent(){
    this.age = age
    this.say = function(){
        console.log('my name is 十八')
    }
}
function Child(){
    Parent.apply(this,arguments)
}