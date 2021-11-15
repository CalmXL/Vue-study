/* 
  创建一个路由器对象模块
*/
import Vue from 'vue'
import VueRouter from "vue-router";
import About from '../pages/About';
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import MessageDetail from '../pages/MessageDetail'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/news',
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              path:'/home/message/messagedetail/:id',
              component:MessageDetail,
              // props:true, // 内部自动将接受的params参数以标签属性进行传入路由组件
              props: (route) => ({id:route.params.id, name: route.query.name})// 函数返回的对象中的所有属性都会以标签属性传入路由组件
            }
          ]
        },
      ]
    },
   

    // 自动重定向
    {
      path:'/',
      redirect:'/about'
    }
  ]
})