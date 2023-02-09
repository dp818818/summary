function throttle(fn){
    let timer = null;
    return function(){
        if(timer){
            return
        }
        timer =  true;
        setTimeout(()=>{
            fn();
            timer = null
        },2000)
    }
}