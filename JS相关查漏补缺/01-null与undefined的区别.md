首先都是基础数据类型
null == undefined  //true
null === undefined //false

undefined表示未定义，一般函数没有返回值或查找对象上没有的属性时，会返回undefined
null表示空对象，GC垃圾回收时，可以使用null将闭包结束引用或者用来初始化空对象