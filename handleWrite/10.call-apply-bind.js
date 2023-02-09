// A.call(obj,...args)  将A中的this指向变为obj
Function.prototype.myCall = function (obj, ...args) {
    let self = this; //this是A
    let t = obj || window
    t.fn = self;  //相当于A中的this指向为t,即A中的this指向为obj
    t.fn(...args)
    delete t.fn
}

function A(num1, num2, num3) {
    console.log(this, num1, num2, num3)
}
let obj = { name: 'zs' }

// A.myCall(obj, 1, 2, 3)



// B.apply(obj,[1,2,3])   与call参数不同，传数组
Function.prototype.myApply = function (obj, array) {
    let self = this;
    let t = obj || window;
    t.fn = self;
    t.fn(...array)
    delete t.fn
}

function B(num1, num2, num3) {
    console.log(this, num1, num2, num3)
}
let obj2 = { name: 'ls' }

// A.myApply(obj2,[1, 2, 3])


 
// C.bind(obj,1,2,3)  与call参数相同，但需要手动调用
Function.prototype.myBind = function (obj, ...args) {
    let self = this;
    return function(){
        let t = obj || window;
        t.fn = self;
        t.fn(...args)
        delete t.fn
    }
}

function C(num1, num2, num3) {
    console.log(this, num1, num2, num3)
}
let obj3 = { name: 'ww' }

C.myBind(obj3,1,2,3)() 
