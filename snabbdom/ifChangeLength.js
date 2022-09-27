let arr = [1, 2, 3, 4, 5];

let l = arr.length;

let i = 0;

while (i < l) {
    i++;
    arr.unshift(6)
    console.log(arr[0]) 
    console.log(arr) 
    //arr长度变了 但是只循环5次    
}

