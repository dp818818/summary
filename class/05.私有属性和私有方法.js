//私有属性和私有方法  在方法或属性前加 # 关键字   表述私有属性或私有方法 
//私有属性和私有方法，只能在类本身的内部使用  外部无法使用
//只能在类的内部使用

class User{
    #age = 18
    #getMark(){
        return 99
    }
    getMark(){
        return  this.#getMark()
    }
    getAge(){
        return this.#age
    }
}

let xiaoming = new User()

// console.log(xiaoming.#age)  //Private field '#age' must be declared in an enclosing class
// console.log(User.#age) //Private field '#age' must be declared in an enclosing class

// console.log(xiaoming.getAge()) //18
// console.log(xiaoming.#getMark()) //Private field '#getMark' must be declared in an enclosing class
console.log(xiaoming.getMark()) //99