class MyPromise{
    constructor(executor){
        this.initValue();
        this.initBind();
        try{
            executor(this.resolve,this.reject); 
        }catch(e){
            this.reject(e)
        }
    }
    // 初始化参数信息
    initValue(){
        this.promiseState = 'pending';
        this.promiseResult = null;
        this.onFulfilledCallBacks = [];
        this.onRejectedCallBacks = [];
    }
    // 初始化this指向
    initBind(){
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
    }
    resolve(value){
        // 指定唯一状态，改变后，状态就是唯一的，fulfilled或者rejected就不改变了
        if(this.promiseState !== 'pending'){
            return;
        }
        this.promiseState = 'fulfilled';
        this.promiseResult = value;
        while(this.onFulfilledCallBacks.length){
            this.onFulfilledCallBacks.shift()(this.promiseResult);
        }
    }
    reject(reason){
        if(this.promiseState !== 'pending'){
            return;
        }
        this.promiseState = 'rejected';
        this.promiseResult = reason;
        while(this.onRejectedCallBacks.length){
            this.onRejectedCallBacks.shift()(this.promiseResult);
        }
    }
    then(onfulfilled,onrejected){
        // 保证参数必须是函数
        onfulfilled = typeof onfulfilled == 'function' ? onfulfilled : value=>value;
        onrejected = typeof onrejected == 'function' ? onrejected : reason=>{throw (reason)};

        let promise2 = new MyPromise((resolve,reject)=>{
            if(this.promiseState === 'fulfilled' ){
                const x = onfulfilled(this.promiseResult); 
                if(x instanceof MyPromise){
                    x.then(
                        value=>resolve(value),
                        reason=>reject(reason)
                    ) 
                }else{
                    resolve(x)
                }
            }else if(this.promiseState === 'rejected'){
                const x = onrejected(this.promiseResult);
                if(x instanceof MyPromise){
                   x.then(
                       value=>resolve(value),
                       reason=>reject(reason)
                   )
                }else{
                    reject(x)
                }
            }else if(this.promiseState === 'pending'){
                this.onFulfilledCallBacks.push(onfulfilled);
                this.onRejectedCallBacks.push(onrejected); 
            }
        })
        return promise2
    }
}


let  p = new MyPromise((resolve,reject)=>{
    console.log('开始了！')
    resolve(12345)
}).then(res=>{
    return new MyPromise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(res)
        },3000)
    })
}).then(res=>{
    console.log(res,'成功了！')
})