//案例：接口参数基于另一个接口返回
function takeTime(n){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // console.log(n)
            resolve(n);
        }, n); 
    })
}


function step1(){
   console.log('step1')
   return takeTime(3000)
}

function step2(){
    console.log('step2')
    return takeTime(4000)
}

function step3(){
    console.log('step3')
    return takeTime(2000)
}


step1().then(res=>{
    return step2()
}).then(res=>{
    return step3()
}).then(res=>{
    console.log(res)
})