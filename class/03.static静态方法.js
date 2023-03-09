//1.静态方法：在方法前加上 static关键字，表示该方法不能被实例继承，只能通过类调用

// class User {
//     constructor(){}
//     static getAge(){
//         console.log(`我已经18岁了！`)
//     }
// }

// let xiaoming = new User();
// xiaoming.getAge()  //xiaoming.getAge is not a function
// User.getAge()  //我已经18岁了！



//2.静态方法中的this指的这个类，而不是实例

class User {
    constructor() { }
    static getAge() {
        console.log(this)
    }
}
User.getAge()

/**
 * class User {
        constructor(){}
        static getAge(){
            console.log(this)
        }
    }
*/


//3.父的静态方法可以被子类继承 

class Student  extends User{

}
// Student.getAge()  //Student{}
