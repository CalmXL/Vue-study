<template>
  <div>
    <p >most stars repo is <a :href='url'>{{name}}</a></p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        name:'',
        url:''
      }
    },

    mounted (){ 
      // 利用 vue-resource发送 ajax 请求
      this.$http.get('https://api.github.com/search/repositories?q=j&sort=stars')
        .then(response => {
          const result = response.data
          const {name, html_url} = result.items[0]
          this.name = name
          this.url = html_url
        })
        .catch(error => {
          console.log('出现了错误')
        })
    }
  }
</script>

<style scoped>
  p{
    font-size: 20px;
  }
</style>
