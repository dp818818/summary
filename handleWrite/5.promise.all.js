function promiseAll(promiseList){
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(promiseList)){
          return new TypeError('argument must an array')
        }
        let promiseCounter = 0;
        let promiseLength  =  promiseList.length;
        let promiseResult = [];
        for(let i=0;i<promiseLength;i++){
            Promise.resolve(promiseList[i]).then(res=>{
                promiseCounter ++ ;
                promiseResult[i] = res;
                if(promiseCounter === promiseLength){
                   resolve(promiseResult)
                }
            },err=>{
                 reject(err)
            })
        }
    })
}




let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(11111)
    },2000)
})

let p2  = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(22222)
    },3000)
})

promiseAll([p1,p2]).then(res=>{
    console.log(res)
})