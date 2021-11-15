import Vue from 'vue'
import App from './app'



new Vue({
  el:'#root',
  // 注册局部组件
  components:{ // 注册组件(后 面才能写组件标签)
    App:App
  },
  template:'<App/>',
})