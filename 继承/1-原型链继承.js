function Parent(age){
    this.age = age
    this.say = function(){
        console.log('my name is 十八')
    }
}
Parent.prototype.sex = '男'


function Child(){
}

Child.prototype = new Parent() 
Child.prototype.constructor = Child

let child = new Child(18)
child.say() //my name is 十八
console.log(child.age) //undefined
console.log(child.sex)  //男

//有点：可以继承构造函数的属性与构造函数的原型
//缺点： 没有办法给父构造函数传参     
