//接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约

interface myInterface{
    readonly name:string   //只读
    age:number
    gender?:string         //可有可无
    [propName:string]:any  //可以添加任意值
    sayHello?(): void
}

// 限制对象
const obj:myInterface= {
    name:'zs',
    age:18,
    grade:5
}

// 限制类
class Person implements myInterface {
    name:string
    age:number
    sayHello(){
        console.log('hello')
    }
}