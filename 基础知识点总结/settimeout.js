let t =   setTimeout(()=>{  console.log(123) },2000);
// console.log(t);

clearTimeout(t);
// console.log(t,'00');



function start(){
    console.log('start执行了');
}

setImmediate(start)

setTimeout(start)

