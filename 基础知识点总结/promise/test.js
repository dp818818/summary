//案例：接口参数基于另一个接口返回
function takeTime(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(n)
            resolve(n);
        }, n);
    })
}


function step1() {
    console.log('step1')
    return takeTime(3000)
}

function step2() {
    console.log('step2')
    return takeTime(4000)
}

function step3() {
    console.log('step3')
    return takeTime(2000)
}


// step1().then(res=>{
//     return step2()
// }).then(res=>{
//     return step3()
// }).then(res=>{
//     console.log(res)
// })




class MyPromise {
    constructor(executor) {
        //初始化数据
        this.initVal();
        //初始化this指向
        this.initBind();
        //throw捕获
        try {
            //执行传进来的函数
            executor(this.resolve, this.reject);
        } catch (e) {
            //throw抛错误直接走reject
            this.reject(e);
        }

    }
    initVal() {
        //初始化为pending等待状态
        this.promiseState = 'pending';
        this.promiseResult = null;
        //定义事件队列，里面都是待执行的事件
        this.onFulfilledCallBackList = [];
        this.onRejectedCallBacklist = [];
    }
    initBind() {
        //将resolve与reject中的this指向为MyPromise实例
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
    }


    resolve(value) {
        //不是等待状态，说明已经成功或失败了，只有等待状态才会  resolve() || reject()
        if (this.promiseState != 'pending') {
            return;
        }
        //状态改为成功
        this.promiseState = 'fulfilled';
        this.promiseResult = value;


        //执行队列中的事件
        while (this.onFulfilledCallBackList.length) {
            this.onFulfilledCallBackList.shift()(this.promiseResult);
        }

    }
    reject(reason) {
        //不是等待状态，说明已经成功或失败了，只有等待状态才会  resolve() || reject()
        if (this.promiseState != 'pending') {
            return;
        }
        //状态改为失败
        this.promiseState = 'rejected';
        this.promiseResult = reason;

        //执行队列中的事件
        while (this.onRejectedCallBacklist.length) {
            this.onRejectedCallBacklist.shift()(this.promiseResult);
        }

    }
    then(onfulfilled, onrejected) {
        // console.log(onfulfilled)
        //保证onfulfilled，onrejected都是函数，.then(res=>{},err=>{})参数是函数
        onfulfilled = typeof onfulfilled == 'function' ? onfulfilled : value => value;
        onrejected = typeof onrejected == 'function' ? onrejected : reason => { throw (reason) };
        //返回新的promise  
        let promise2 = new MyPromise((resolve, reject) => {
            if (this.promiseState === 'fulfilled') {
                try {
                    const x = onfulfilled(this.promiseResult);
                    //obj instanceof F   判断构造函数的原型（prototype）是否出现在对象的原型链上  
                    if (x instanceof MyPromise) {
                        x.then(
                            value => resolve(value),
                            reason => reject(reason)
                        )
                    } else {
                        resolve(x)
                    }
                } catch (e) {
                    reject(e)
                }
            } else if (this.promiseState === 'rejected') {
                try {
                    const x = onrejected(this.promiseResult);
                    if (x instanceof MyPromise) {
                        x.then(
                            value => resolve(value),
                            reason => reject(reason)
                        )
                    } else {
                        reject(x)
                    }
                } catch (e) {
                    reject(e)
                }
            } else if (this.promiseState === 'pending') {
                this.onFulfilledCallBackList.push(onFulfilled)
                this.onRejectedCallBacklist.push(onRejected)

            }
        })
        return promise2
    }
}



//写罢，面试官测试一下
let p = new MyPromise((resolve, reject) => {
    console.log('开始了！')
    resolve(12345)
}).then(res => {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve(res)
        }, 3000)
    })
}).then(res => {
    console.log(res, '成功了！')
})



