<template>
  <div>
    <p>click, {{count}}, is {{evenOrOdd}}</p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementIfOdd">incrementIfOdd</button>
    <button @click="incrementAsync">incrementAsync</button>

  </div>
</template>

<script type="text/ecmascript-6">
/* 
  store对象：
    1.state
    2.getters:
    3.dispatch()
    4.commit()
*/
  import { mapState, mapMutations, mapGetters, mapActions} from 'vuex'
  export default {
   
    mounted () {
      console.log('store', this.$store)
    },

    computed:{
      // count() {
      //   return this.$store.state.count
      // },
      // evenOrOdd() {
      //   return this.$store.getters.evenOrOdd
      // }
      ...mapState(['count']), 
      ...mapGetters(['evenOrOdd'])
    },

    methods:{
      // increment(){
      //   // this.conunt++
      //   this.$store.commit('INCREMENT')
      // },

      // decrement() {
      //   this.$store.commit('DECREMENT')
      // },

      // incrementIfOdd() {
      //   this.$store.dispatch('incrementIfOdd')
      // },

      // incrementAsync() {
      //   this.$store.dispatch('incrementAsync')
      // }
      ...mapActions(['incrementIfOdd','incrementAsync']),
      ...mapMutations({
        increment: 'INCREMENT',
        decrement: 'DECREMENT'
      })

    }
  }
</script>

<style scoped>
 
</style>
