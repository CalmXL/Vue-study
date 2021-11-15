<template>
   <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Basic - 01</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 路由链接 -->
          <router-link class="list-group-item" to="/about">About</router-link>
          <router-link class="list-group-item" to="/home">Home</router-link>
        </div>
      </div>

      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 在此显示当前路由组件 -->
            <!-- 
              React 
                <Switch>
                  <Router/>
                </Switch>
             -->
            <!-- 
              keep-alive 包裹动态组件，会缓存不活动的组件的实例，不销毁他们
             -->
            <keep-alive exclude="About"> 
               <router-view></router-view>
            </keep-alive>
           

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
   
  }
</script>

<style scoped>
   a.router-link-active{
      color: red;
      background-color: yellowgreen;
    }
</style>
