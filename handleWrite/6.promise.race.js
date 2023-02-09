function promiseRace(promiseList){
   return new Promise((resolve,reject)=>{
       for(let i=0;i<promiseList.length;i++){
           promiseList[i].then(
            resolve,reject
           )
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
    },1000)
})

promiseRace([p1,p2]).then(res=>{
    console.log(res)
},err=>{
    console.log(err)
})