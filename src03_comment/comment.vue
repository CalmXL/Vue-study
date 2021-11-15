<template>
  <div class="comment">
    <header>
      请发表对Vue的评论
    </header>
    <div class="left">
      <Username/>
      <Content/>
    </div>
    <div class="right">
      <Show/>
    </div>
    

  </div>
</template>

<script type="text/ecmascript-6">
import Username from './components/username.vue'
import Content from './components/content.vue'
import Show from './components/show.vue'

  export default {
    components:{
      Username,
      Content,
      Show,
    }
  }
</script>

<style scoped>
  .comment{
    width: 800px;
    height: 600px;
    border: aqua solid 3px;
    margin: 200px auto;
  }
  header{
    height: 200px;
    padding: 0 0 0 40px;
    background-color: gainsboro;
    line-height: 200px;
    font-size: 40px;
  }
  .left{
    width: 300px;
    height: 400px;
    background-color: violet;
    float: left;
  } 
  .right{
    width: 500px;
    height: 400px;
    background-color: yellow;
    float: left;
  }
  
</style>
