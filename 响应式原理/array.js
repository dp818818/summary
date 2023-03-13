import def from './utils.js';

//arrayMethods可以使用数组方法  等于arrayMethods.__proto__ = Array.prototype
export let arrayMethods = Object.create(Array.prototype);

let methodNeedChange = [
    'pop', 'push', 'unshift', 'shift', 'splice', 'sort', 'reverse'
]

methodNeedChange.forEach(methodName => {
    //备份初始的方法
    const original = Array.prototype[methodName]
    def(arrayMethods, methodName, function () {
        // console.log(this) //this 是使用重写方法的数组   
        // console.log(arguments) //arguments 是使用重写方法传的参数  
        const result = original.apply(this, arguments)
  
        //参数
        const args = [...arguments];

        //vue中data为什么要是对象，因为第一次必须是对象，才能监听data 里的属性
        const ob = this.__ob__;
        //要插入的数据
        let insertList = [];
        
        //当时这3个方法时，是需要添加数据的
        switch(methodName){
            case 'push':
            case 'unshift':
                //push(55,66)
                insertList = args;
                break;
            case 'splice':
                //splice( index ,howmany , 55,66 )  下标为2以后的数据是添加的
                insertList = args.slice(2);
                break;     
        }
        //将添加的数据响应式  observeArray是ob上的属性
        ob.observeArray(insertList)
        // console.log(ob)
        // console.log('我是被重写的，此时会调用！')
        return result;
    }, false)
})