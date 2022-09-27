function Extends(sub,sup){
    sub.prototype = Object.create(sup)
    sub.constructor =  sub
}
function Parent(){}
function Child(){
    Parent.apply(this,arguments)
}