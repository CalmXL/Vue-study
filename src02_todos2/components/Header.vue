<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model='title' @keyup.enter="add"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
    },
    data(){
      return{
        title:''
      }
    },
    methods:{
      add(){
        // 获取输入框信息,包装成一个对象
        if (!this.title) return
        const todo = {
          id:Date.now(),
          title:this.title,
          finish:false
        }
        // 调用更新的函数
        // this.addtodo(todo)

        // 分发自定义事件： addtodo
        this.$emit('addtodo', todo)
        
        // 清除输入
        this.title = ''
      }
    }

  }
</script>

<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
