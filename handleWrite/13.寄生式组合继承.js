function Extends(Child,Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor =  Child;
}

function Parent(name) {
    this.name = name
}
Parent.prototype.sayName = function () {
    console.log('我的名字是：')
}
function Child(){
    Parent.call(this,...arguments)
    this.age = 18
}



// 寄生式组合继承是优于组合式继承的
// 1.只调用一次父类
// 2.组合式继承，在call和new Parent时，两次将name属性放到了child上，因为调用了两次父类，造成原型捆绑更多
