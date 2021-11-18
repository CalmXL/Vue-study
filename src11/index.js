import Vue from 'vue'
import App from './app'
import store from './vuex/store'

new Vue({
  el:'#root',
  // 注册局部组件
  components:{ // 注册组件(后 面才能写组件标签)
    App:App
  },
  template:'<App/>',
  store, // 配置vuex的store， 内部在Vue原型对象上添加了一个属性， $store 
})

/* 
  store 对象内部数据结构
    1.读取数据状态
      state： 包含vuex 管理的所有状态数据对象
      getters: 包含vuex所有的getter计算的对象
    2.更新状态数据
      diapatch() : 触发action调用
      commit() ： 触发muation调用
*/