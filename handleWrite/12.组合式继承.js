function Parent(name) {
    this.name = name
}
Parent.prototype.sayName = function () {
    console.log('我的名字是：')
}

// 组合式继承：原型链继承+构造函数继承
function Child() {
    Parent.call(this,...arguments)
    this.age = 18
}


// 原型链继承  
Child.prototype = new Parent()  // child.__proto__ = parent  
Child.prototype.constructor = Child


let child = new Child('dp');