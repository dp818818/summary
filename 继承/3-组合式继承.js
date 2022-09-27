//组合继承  结合原型链继承与构造函数继承

function Parent(age){
    this.age = age
    this.say = function(){
        console.log('my name is 十八')
    }
}
Parent.prototype.sex = '男'


function Child(){
  Parent.apply(this,arguments)
}

Child.prototype = new Parent()
let child = new Child(18)

child.say() //my name is 十八   
console.log(child.age) //18
console.log(child.sex)   //男


//可以继承构造函数的属性与构造函数原型的属性 可以给构造函数传参
