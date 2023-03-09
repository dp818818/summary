let methodName = 'getName'

class User {
    constructor(name){
        this.name = name
    }
    [methodName](){
        console.log(`我是${this.name}`) 
    }
}

let xiaoming = new User('xiaoming');
xiaoming.getName()  //我是xiaoming