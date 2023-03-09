// 在定义类或函数时，类型不明确时，可以使用泛型

function  fn<T>(a:T):T{
   return a;
}

let result = fn(10)  //不指定类型，ts自动推断类型
let result2 = fn<string>('hello') 


// 泛型可以同时指定多个
function fn2<T,K>(a:T,b:K):T{
    console.log(b)
    return a
}

let result3 =  fn2<string,number>('hello',123);



// 类使用泛型
class Person1<T,K>{
    name:T
    age:K
    constructor(name:T,age:K){
        this.name = name
        this.age = age
    }
}

let xiaoming = new Person1<string,number>('小明',18)
console.log(`${xiaoming.name}已经${xiaoming.age}`)


// 校验传参必须有length属性
interface Inter{
    length:number
}

function fn3<T extends Inter>(a:T):number{
    return a.length
}

// fn3(123)  //报错
fn3('123')
fn3({length:5})