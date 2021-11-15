# 自定义Vue环境开发

## 1. 搭建基本开发环境

  1). 下载依赖包
    yarn add -D webpack webpack-cli
    yarn add -D html-webpack-plugin
    yarn add -D webpack-dev-server
    yarn add -D babel-loader @babel/core @babel/preset-env
    yarn add -D css-loader style-loader
    yarn add -D url-loader@2.3.0 file-loader@4.3.0

  2).webpack基本配置  webapck.config.js
    module.exports = {
      entry:{

      },
      output:{

      },
      module:{
        rules:[

        ]
      },
      plugins:{

      },
      devServer: {

      },
      devtool:''
    }

  3).区分生产环境 开发环境
    生产环境：
      npm run build ==> webpack
        1.在内存中进行编译打包，生成内存中的打包文件
        2.保存到本地（在本地生成打包文件） ==> 此时还不可以通过浏览器来使用开发环境，需要启动服务器运行
    
    开发环境： 
      npm run dev ==> webpack-dev-server
      1.在内存中进行编译打包，生成内存中的打包文件
      2.调动服务器，运行内存中的文件， ==> 可以通过浏览器虚拟路径进行访问
   