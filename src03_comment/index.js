import Vue from 'vue'
import Comment from './comment.vue'

Vue.component('Comment', Comment)

new Vue({
  el:'#root',
  components:{
    Comment
  },
  template:'<Comment/>'
})