function checkType(value){
    if(value === null){
       return value + ''
    }
    if(typeof value === 'object'){
        let type = Object.prototype.toString.call(value);
        type = type.split(" ")[1].split("")
        type.pop()
        return type.join("").toLowerCase()
    }else{
        return typeof value
    }
}


