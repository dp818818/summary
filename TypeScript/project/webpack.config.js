const path = require('path');

// 引入html-webpack-plugin
const htmlWebpackPlugin = require('html-webpack-plugin');
// 引入每次打包就清空上次dist内容插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 模式
    mode:"development",
    //打包入口 
    entry: "./src/index.ts",
    // 打包输出
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    //配置热更新 devServer 
    devServer:{
       host:"0.0.0.0",
       port:8081   
    },
    // 配置loader
    module: {
        rules: [
            // 添加ts-loader
            {
                test: /\.ts$/,
                use: ['ts-loader']
            }
        ]
    },

    // 配置plugins
    plugins: [
        // 帮我们自动引入依赖到html
        new htmlWebpackPlugin({
          template:'./src/index.html',
          filename:'index.html'
        }),
        new CleanWebpackPlugin()
    ]


}