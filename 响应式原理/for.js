let k = [1,2,3]

let l = k.length;
for (let i = 0; i < l; i++) {
    console.log(k[i])  // 1  2   3    循环次数不变
    k = [1,2,3,4,5]
}
// console.log(l) //3


// for (let i = 0; i < k.length; i++) {
//     console.log(k[i]); // 1 2 3 4 5    //循环次数随之改变
//     k = [1, 2, 3,4,5];
// }

