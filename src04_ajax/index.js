import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './app'

// 注册全局组件
// Vue.component('App', App)

/* 
 全局事件总线(Global Event Bus)
	- 所有组件对象的原型对象时一个 vm 对象， ==> Vue 原型对象是组件对象的原型链上的对象
	- 创建一个全局用于绑定事件监听和分发事件的对象: Global Event Bus
	- 事件总线对象就是一个vm
	- 将其挂载到Vue的原型对象上，所有的组件对象就都可以看到这个事件总线对象
*/

// 声明使用Vue插件
Vue.use(VueResource)// 内部给所有组件对象都添加了一个$http

Vue.prototype.$GlobalEventBus = new Vue()

new Vue({
  el:'#root',
  // 注册局部组件
  components:{ // 注册组件(后 面才能写组件标签)
    App:App
  },
  template:'<App/>'
})