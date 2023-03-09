// 保证一个类仅有一个实例
// 并提供一个访问它的全局访问点
//适用场景：一个单一对象。比如：弹窗，无论点击多少次，弹窗只应该被创建一次。

class CreateUser {
    constructor(name) {
        this.name = name;
        this.getName();
    }
    getName(){
        return this.name;
    }   
}


// 代理实现单例模式
var ProxyMode = (function(){
    var instance = null;
    return function(name){
        if(!instance){
            instance = new CreateUser(name)
        }
        return instance
    }
})()


var a = new ProxyMode('aaa');
var b = new ProxyMode('bbb');

console.log(a) //CreateUser { name: 'aaa' }
console.log(b) //CreateUser { name: 'aaa' }

