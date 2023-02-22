/**
 * @param {*} arg1  
 * @param {*} arg2 
 * @returns 
 */
export default function summation(arg1, arg2) {
    if( arg1 === null ||   arg2 === null){
        return 
    }
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    // 使保留小数的位数相同
    var val1 = arg1.toFixed(Math.max(r1, r2))
    var val2 = arg2.toFixed(Math.max(r1, r2))
    // 直接将小数点删掉  replace(".","")  相当于直接 *m
    var str1 = val1.toString()
    var str2 = val2.toString()
    if (str1.indexOf('.') != -1) {
        str1 = str1.replace(".","")
    }
    if(str2.indexOf('.') != -1){
        str2 = str2.replace(".","")
    }
    return ( parseInt(str1)   +   parseInt(str2)  ) / m
}
