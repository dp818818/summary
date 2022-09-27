export default function def(data, key, value, enumerable) {
    Object.defineProperty(data, key, {
        configurable: true,
        writable: true,
        enumerable: enumerable,
        value
    })
}

/**
 * 
 * 
 * let obj = {
        a: 10,
        b: 11
    }
    def(obj, 'a', 10, false);

    for (let key in obj) {
        console.log(key) //b  a将不可枚举
    }
 * 
 */

