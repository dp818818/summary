// 定义一系列算法，并将它们封装起来，并使它们可以相互替代
// 策略模式的目的是将算法的使用和算法的实现分离开来


/**策略类 */
var levelObj = {
    "A":function(money){
       return money * 4
    },
    "B":function(money){
        return money * 3
    },
    "C":function(money){
        return money * 2
    },
    "D":function(money){
        return money * 1
    },
}

/**环境类 */
var countBouns = function(level,money){
    return levelObj[level](money)   
}

console.log(countBouns('A',10000))
console.log(countBouns('B',10000))