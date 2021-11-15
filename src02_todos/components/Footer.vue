<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
      <span>已完成{{ finishNum }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" v-show='finishNum > 0 ? true : false' @click="clearFinished()">清除已完成任务</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    todos: Array,
    todosIsFinish: Function,
    clearFinished: Function
  },
  computed: {
    finishNum() {
      return this.todos.reduce(
        (prevFinishNum, todo) => prevFinishNum + (todo.finish ? 1 : 0),
        0
      );
    },
    isAllCheck: {
      get: function (){
         return this.finishNum === this.todos.length ? true : false
      },
      set: function (value){
        console.log(value)// 是否选中
        this.todosIsFinish(value)
      }
    }
  }

};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
