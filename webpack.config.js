const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 模式: 生产环境
  // mode: 'production',
  // 入口
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  // 出口(打包生成js)
  output: {
    filename: 'static/js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/' // 引入打包文件时 路径以 / 开头
  },
  // 模块加载器
  module: {
    rules: [
      // 处理ES6 --> ES5
      {
        test: /\.js$/, // 用于匹配文件(对哪些文件进行处理)
        //exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, 'src'), // 只针对哪些处理
        use: {
          loader: 'babel-loader',
          options: {
            /* 
              预设包：包含多个常用插件包的设置
            */
            presets: ['@babel/preset-env']
          }
        }
      },
      // 处理 css
      {
        test:/\.css/,
        // 这里的 use 有顺序， 从右向左执行
        use:['vue-style-loader', 'css-loader'],
      },
      // 处理图片
      {
        test:/\.(png|jpg|gif)$/i,
        use: [
          {
            loader:'url-loader',
            options:{
              limit:8192,
              name: 'static/img/[name].[hash:7].[ext]'
            }
          }
        ]
      },
      // 处理 Vue 单文件模块
      {
        test: /\.vue$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'vue-loader'
      }
    ]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    open: true, // 自动打开浏览器
    // quiet: true, // 不做太多日志输出
     // index.html 来代替页面提供的404响应。
    historyApiFallback: true, // 任意的 404 响应都被替代为 index.html
  },
  // devtool: 'cheap-module-eval-source-map',

  // 引入模块解析
  resolve:{
    extensions: ['.js', '.vue', '.json'],// 可省略后缀名
    alias:{
      'vue$':'vue/dist/vue.esm.js', // 标识精准匹配
    }
  },
 
}