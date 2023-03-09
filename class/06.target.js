class Person {
    constructor(){
        console.log(new.target)   
    }
}

// new Person()  //Person{}



class User extends Person{
    constructor(){
        super()
    }
}


new User()  //User{}

//Class内部调用new.target，返回当前 Class
//子类继承父类时，new.target会返回子类。