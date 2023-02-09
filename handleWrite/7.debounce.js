function debounce(fn){
   let timer = null
   return function(){
       if(timer){
          clearTimeout(timer)
       }
       timer = setTimeout(()=>{
          fn()
       },2000)
   }
}

// 立即执行版
function debounceIm(fn){
    let timer = null
    return function(){
        if(timer){
           clearTimeout(timer)
        }
        let callNow = !timer
        timer = setTimeout(()=>{
            timer = null
        },2000)
        if(callNow){
           fn()
        }
    }
 }