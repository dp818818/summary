function Parent(age){
    this.age = age
    this.say = function(){
        console.log('my name is 十八')
    }
}
Parent.prototype.sex = '男'


function Child(){ 
    Parent.apply(this,arguments) //arguments参数  
}
let child = new Child(18)


child.say() //my name is 十八   
console.log(child.age) //18
console.log(child.sex)   //undefined

//有点：可以使用构造函数的属性，可以给构造函数传参
//缺点：没法使用构造函数的原型上的属性


