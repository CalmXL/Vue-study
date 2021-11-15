<template>
  <div>
    <ul>
      <li v-for="(m, index) in messages" :key="m.id">
        <!-- <router-link :to="'/home/messages/'+ m.id">{{m.title}}</router-link> -->
        <router-link :to="`/home/message/messagedetail/${m.id}`">{{m.title}}</router-link>
        --<button @click="pushShow(m)">push</button>
        --<button @click="replaceShow(m)">replace</button>
      </li>
    </ul>
    <button @click="back">back</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return{
        messages:[]
      }
    },
    mounted(){
      setTimeout(() => {
        const messages = [
          {id:1, title:'Message001', content:'message content001'},
          {id:3, title:'Message003', content:'message content003'},
          {id:5, title:'Message005', content:'message content005'}
        ]
        this.messages = messages
      },1000)
    },
    methods:{
      pushShow(m){
        // 判断要跳转的id和地址栏的id是否一致，一致不跳转
        const currId  = parseInt(this.$route.params.id) 
        // console.log(typeof currId)
        if(currId === m.id) return
        this.$router.push(`/home/message/messagedetail/${m.id}`)
      },
      replaceShow(m) {
        const currId  = parseInt(this.$route.params.id) 
        // console.log(typeof currId)
        if(currId === m.id) return
        this.$router.replace(`/home/message/messagedetail/${m.id}`)
      },
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
 
</style>
