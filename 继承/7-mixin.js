function MyClass(){
    Section1.call(this)
    Section2.call(this)
}  

function Section1(){
    this.age =18
}
Section1.prototype.book = '语文'

function Section2(){
    this.name = 'dd'
}
Section1.prototype.person = 80

MyClass.prototype = Object.create(Section1.prototype)
Object.assign(MyClass.prototype,Section2.prototype )
MyClass.prototype.constructor = MyClass

let myclass = new MyClass()

console.log('myclass.age',myclass.age) //18
console.log('myclass.name',myclass.name)//dd


console.log(myclass.book) //语文
console.log(myclass.person) //80