const path = require('path');

// 打包自动创建html，并自动引入打包后的依赖
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 打包自动清楚上一次打包内容（dist）
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


// webpack 不能直接处理 css，需要借助 loader，  scss less需要借助loader转为css 再继续处理，loader执行顺序  从右往左
// 处理css 需要css-loader与style-loader    style-loader 负责动态创建style标签插入到head中      css-loader负责处理@import语句
// 处理css浏览器兼容的loader  postcss-loader、 autoprefixer   负责自动生成浏览器前缀


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    allowedHosts: [
      '0.0.0.0'
    ],
    port: 7992
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ['sass-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader'
        }],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html', //打包后的文件名
    }),
    new CleanWebpackPlugin()
  ]
};


