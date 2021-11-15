<template>
  <div>
    <h2>{{title}}</h2>
    
    <Blogs/>
  </div>
</template>

<script type="text/ecmascript-6">
import Blogs from './components/Blogs.vue'

export default { // 配置对象
  components:{
    Blogs:Blogs
  },
  data(){
    return{
      title:'Jay Zhou111'
    }
  }
  
}
</script>

<style scoped>
   h2{
     color: aqua;
   }
</style>