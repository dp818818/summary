//ts编译是将ts转换为js,ts是js的超集，js在ts中都支持！
//安装  npm install -g typescript
//编译 tes xxx.ts  例如：tsc 数据类型.ts  会生成  数据类型.js



//声明变量用的是 : 而不是 =  , : 声明是声明类型，而不是赋值 ，= 是赋值
//新增类型：any、void、enum(枚举)、never、元组。
//js和ts共有数据类型：number、string、boolean、undefined、null、object、array、function、(symbol)


/**1.number string boolean 变量声明*/
// number string boolean 都是小写

let aa: number;
aa = 5;
// a = 'hello'  //只能赋值为number，赋值hello会打红色波浪线，提示:不能将类型“string”分配给类型“number”。

let b: string;
b = '你好！';
b = '再见！'
// b = 6; //不能将类型“number”分配给类型“string”。

let c: boolean;
c = true;
c = false;
// c = 7; //不能将类型“number”分配给类型“boolean”。


//ts可以声明同时赋值或直接赋值自动赋予类型
let d: number = 6;
let e = 6;


/**2.字面量声明 */
let a2: 2;
// a2 = 3; //不能将类型“3”分配给类型“2”


/**3.函数声明 */
function a3(s1: string, s2: string): string {
    return s1 + s2;
}
a3('你好！', '再见')
// a3('你好！',123)  //报错

function a32(s1: string, s2: string): number {
    return 4;
    // return '4'; //报错 (s1:string,s2:string):number 定义了返回值是number，就不能返回string。
}


/**4.联合类型 */
let a4: string | number;
a4 = 4;
a4 = '4';

let a42: 1 | 2;
a42 = 1;
a42 = 2;
// a42 = 3;  //不能将类型“3”分配给类型“2 | 1”。


/**5.组合类型 */
let a5: string & number;  //无意义，根本没有即是string又是number的数据类型；
let a51: { name: string } & { study: boolean };
a51 = { study: true, name: '前端' };

/**6.any */
//any表示任意类型,就跟js一样了，不建议使用
let a6: any;
a6 = 6;
a6 = '6';
a6 = false;
a6 = null;

let a61: any;
let a62: string;
let a66: number;
a62 = '123';
a61 = '123';
// a66 = a62 ;//报错 不能将类型“string”分配给类型“number”。 
a66 = a61;  //不会报错

/**7.unknown */
//字面意思上表示不知道
let a7: unknown;
a7 = 7;
a7 = '7';

let a71 = 7;
let a72: unknown;
a72 = '7';
// a71 = a72;  //报错  不能将类型“unknown”分配给类型“number”。unknown是较为安全的any

/** 8.void*/
//表示函数无返回值
function a8(s1: string): void {

}

/**9.never */
//表示没有任何值  void返回undefined,never连undefined都没有
function a9(s1: string): never {
    throw new Error()
}

/** 10.null*/
//与js一样 表示值为空
let a10: null;
a10 = null;
// a10 = 1; //不能将类型“1”分配给类型“null”

/**11.undefined */
//与js一样 表示未定义
let a11: undefined;
a11 = undefined;
// a11 = 11; //不能将类型“11”分配给类型“undefined”

/**12.object */
let a12: object;
a12 = {};
a12 = [];
// a12 = 12; //不能将类型“number”分配给类型“object”


//1.b12定义的name与age都要有
let b12: { name: string, age: number };
// b12 = {name:'前端'}   //类型 "{ name: string; }" 中缺少属性 "age"
b12 = { name: '前端', age: 0 };

//2.可以在定义属性上加?表示可有可无
let c12: { name: string, age?: number };
c12 = { name: '前端' };
c12 = { name: '前端', age: 0 };
// c12 = { age:0  }; //类型 "{ age: number; }" 中缺少属性 "name"

//3.[propName:string]:any 表示任意属性
let d12: { name: string, [propName: string]: any }  //只需要name属性,其他属性随意且无论几个
d12 = { name: '前端' };
d12 = { name: '前端', age: 99, sex: 'male', money: -20 }



/**13.数组 */
// 数组声明 类型[] 或  Array<类型>
let a13: string[];
// a13 = [1,2]  //报错   不能将类型“number”分配给类型“string”。
a13 = ['1', '2', '3']

let b13: Array<number>;
b13 = [1, 2, 3]

/**14. 元组*/
//元组类型用来表示已知元素数量和类型的数组
let a14: [number, string]
a14 = [1, '2']
// a14 = [ '2',1 ] //报错,类型位置没对上

/**15.枚举  enum */
//举类型用于定义数值集合。
enum prople {
    name,
    age
};

let xiaoMing: { grade: number, user: prople };
xiaoMing = { grade: 2, user: prople.name };


/**16. 类型别名*/
type myType = 1 | 2 | 3 | 4
let a16: myType;
let b16: myType;
a16 = 1;
// a16 = 5; //能将类型“5”分配给类型“myType”
b16 = 1;
// b16 = 5; //不能将类型“5”分配给类型“myType”。


/**17.类型断言 */
//通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”
let someValue:any  = "this is a value";
let strLength: number = (<string>someValue).length;
//另一种as 语法：
let someValue2:any  = "this is a value";
let strLength2:number = (someValue2 as string).length



/**泛型 */
//泛型是不确定的类型  但是和any不同，any是任意类型





