<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 给当前的 Header 事件绑定自定义事件监听 -->
      <!-- <Header @addtodo="addtodo" />  -->
      <Header ref="Header"/> 
      <List :todos="todos" :deletetodo="deletetodo" :updateFinish="updateFinish" :updateItem="updateItem"/>
      <Footer :todos="todos" :todosIsFinish="todosIsFinish" :clearFinished="clearFinished"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import {getItem, setItem} from './utils/storageUtils'
import PubSub from "pubsub-js";

export default {

  // 配置对象
  components: {
    Header,
    List,
    Footer,
  },
  data() {
    return {
      todos: [],
    };
  },
  mounted(){

    // PubSub 监听,callback 中首位参数为事件名
    PubSub.subscribe('updateItem', (msg,{index ,result})=>{
      console.log(msg)
      this.updateItem(index, result)
    })

    // Header 监听添加事件
    this.$refs.Header.$on('addtodo', this.addtodo)
    // 全局事件 监听删除事件
    this.$GlobalEventBus.$on('deletetodo', this.deletetodo)
    this.$GlobalEventBus.$on('updateItem', this.updateItem)
    setTimeout(() => {
      // this.todos = JSON.parse(localStorage.getItem('todo_keys') || '[]')
      this.todos = getItem()
    },1000)
  },
  methods: {
    addtodo(todo) {
      this.todos.unshift(todo);
    },
    deletetodo(index) {
      console.log(index);
      this.todos.splice(index, 1);
    },
    todosIsFinish(value){// 修改是否全部勾选状态
      this.todos.forEach((todo)=>{
        todo.finish = value
      })
    },
    clearFinished(){
      this.todos = this.todos.filter((todo)=>{
        return todo.finish !== true
      }) 
    },
    updateFinish(value, index){
      console.log(value,index)
      this.todos[index].finish = value
    },
    updateItem(index, result){
      this.todos[index].title = result
    }

  },
  watch:{
    todos:{
      deep: true, // 开启深度监视
      // handler (value){
      //   //  localStorage.setItem('todo_keys', JSON.stringify(value))
      //   setItem(value)
      // }
      handler: setItem
    }
  }
};
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
