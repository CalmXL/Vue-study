<template>
  <div>
    <h4>Home</h4>
    <hr>
    <div class="list-group">
      <router-link class='item' to="/home/news">news</router-link>
      <router-link class='item' to="/home/message">message</router-link>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style scoped>
  .list-group .item{
    font-size: 18px;
    padding: 0 10px;
  }
  .list-group .item:hover{
    color: red;
  }
</style>
