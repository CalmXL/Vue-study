<template>
  <div>
    <ul>
      <li>ID: {{$route.params.id}}</li>
      <li>Title:{{title}}</li>
      <li>Content: {{content}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
   const messagesDetail = [
      {id:1, title:'Message001', content:'message content001'},
      {id:3, title:'Message003', content:'message content003'},
      {id:5, title:'Message005', content:'message content005'}
    ]

  export default {  
    data(){
      return{
        title:'',
        content:''
      }
    },
    /* 
      路由组件对象是在第一次请求对应路径时才创建
      从一个路由组件离开，路由组件死亡，再进入需要重新创建
      当在同一个路由路径上微切换
      同一个组件对象mounted() 只执行一次
    */
    watch: {
      $route(to,form){
        
        // console.log(to) to当前的对象
        // console.log(form) form 之前的对象
        setTimeout(() => {
          const id = to.params.id * 1;
          const {title, content} = messagesDetail.find(mes => mes.id === id)

          this.title = title
          this.content = content
        },1000)
      }
      
    },
    mounted() {
      
    }
    
  }
</script>

<style scoped>
 
</style>
