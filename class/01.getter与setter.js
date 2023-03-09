class User{
    constructor(){
        
    }
    get name(){
        return 'xiaoming'
    }
    get age(){
        return '19'
    }
    set age(value){
        console.log(`setter是${value}`)
    }
}


let xiaoming = new User();


console.log(xiaoming.name)
console.log(xiaoming.age)
xiaoming.age = 18