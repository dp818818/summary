# @babel/core @babel/cli

"scripts": {
    "compiler": "babel src --out-dir lib --watch"
}
babel核心  此时编译代码没有任何改变  需要安装plugin进行代码转换  
sum.js 没有任何变化，只是空行去掉了



# @babel/preset-env  预设  
转换代码需要几十个插件（plugin），我们可以一个个手动添加，babel提供了@babel/preset-env 预设,

.babelrc 文件配置

{
    "presets": ["@babel/preset-env"]
}

配置后编译前：
// 箭头函数
const  sum = (val1,val2)=>{
   return val1 + val2
}

console.log(sum(100,200))


配置编译后：
"use strict";

// 箭头函数
var sum = function sum(val1, val2) {
  return val1 + val2;
};
console.log(sum(100, 200));



# @babel/polyfill   core-js@3  

百度翻译：一种材料，是物品更加温暖舒适

polyfill 就是对一些特殊函数的补充，会将一些数组方法，如Array.form,includes等添加Array.prototype上，会造成全局污染，可以通过 @babel/plugin-transform-runtime解决

@babel/preset-env 提供了一个 useBuiltIns 参数，设置值为 usage 时，就只会包含代码需要的 polyfill （不用整个包都导进去，只导入所需的文件或者方法）。usage必须和corejs一起使用

//.babelrc
{
   "presets" ：[
        "@babel/env",
        {   
            "useBuiltIns": "usage",
            "corejs": 3
        }
   ]
}

    


#  @babel/plugin-transform-runtime
优化polyfill,假如十个组件都使用同一个数组方法，这10个文件都要被inject这个函数，相当于在项目添加了10个函数，打包体积必然比十个文件都使用同一个导入的方法大，相当于项目只添加了一个函数,还可以避免全局的方法污染。

//.babelrc
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",
                "corejs": 3
            }
        ]
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime"
        ]
    ]
}




https://juejin.cn/post/6844904008679686152#heading-7