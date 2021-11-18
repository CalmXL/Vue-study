<template>
  <div>
    <p>click, {{conunt}}, is {{oddOrEven}}</p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="ifOddIncrement">ifOddIncrement</button>
    <button @click="incrementSync">incrementSync</button>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return{
        conunt:0,
        oddOrEven:''
      }
    },

    watch:{
      conunt:function(a,b) {
        a % 2 === 0 ? this.oddOrEven = "偶数" : this.oddOrEven = '奇数'
      }
    },
    methods:{
      increment(){
        this.conunt++
      },

      decrement() {
        this.conunt--
      },

      ifOddIncrement() {
        if(this.conunt % 2 === 1) {
          this.conunt++
        }
      },

      incrementSync() {
        setTimeout(() => {
          this.conunt++
        },1000)
      }

    }
  }
</script>

<style scoped>
 
</style>
