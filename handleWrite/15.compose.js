// 将多个关联的函数调用组合成一个

function compose(...funcs) {
    if (funcs.length === 0) {
        return (...args) => args;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    let count = funcs.length - 1;
    let result = undefined;
    return function fn(...args) {
        if (count < 0) {
            return result;
        }
        // console.log('开始',count)
        // console.log(funcs[count--])
        // console.log('结束',count)
        result = funcs[count--](...args);
        return fn(result);
    };
}

const fn1 = (x) => x + 10;
const fn2 = (x) => x * 10;
const fn3 = (x) => x - 10;
console.log(compose(fn3, fn2, fn1)(1)); // 100
