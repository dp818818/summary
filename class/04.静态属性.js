// 静态属性和静态方法的功能一样  实例无法继承，类本身可访问

class User{
    static age = 18;
    grage = 5;
}

let xiaoming = new User()
console.log(xiaoming.age)  //undefined
console.log(xiaoming.grage)  //5
console.log(User.age) //18
console.log(User.grage) //undefined