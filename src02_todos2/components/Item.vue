<template>
  <li
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
    :style="{ backgroundColor: backColor }"
  >
    <label>
     <!-- 子组件不能直接更新父组件的数据,双向绑定直接修改，使用computed的set方法 -->
      <input type="checkbox" v-model="isFinish" />
      <span>{{ todo.title }}</span>
    </label>
    <button
      class="btn"
      v-show="isShow"
      @click="change"
    >
    修改
    </button>
    <button
      class="btn btn-danger"
      v-show="isShow"
      @click="deleteItem(todo,index)"
    >
      删除
    </button>
  </li>
</template>
/* 
  1.绑定事件监听
  2.设计数据
  3.在监听回调中，更新数据
 */
<script type="text/ecmascript-6">
import PubSub from "pubsub-js";
export default {
  data() {
    return {
      backColor: "white",
      isShow: false,
    };
  },
  props: {
    index: Number,
    todo: Object,
    deletetodo: Function,
    updateFinish: Function,
    updateItem:Function
  },
  methods: {
    handleEnter(isEnter) {
      if (isEnter) {
        this.backColor = "grey";
        this.isShow = true;
      } else {
        this.isShow = false;
        this.backColor = "white";
      }
    },
    deleteItem(todo, index) {
      if (window.confirm("你确定删除" + todo.title + "吗？")) {
        // this.deletetodo(index);
        this.$GlobalEventBus.$emit('deletetodo',index)
      }
    },
    change(){
      var result= window.prompt("请你输入修改信息？","请在这里输入")
      // 全局事件总线分发
      // if(result) this.$GlobalEventBus.$emit('updateItem', this.index, result)
       
      // PubSub分发
      if(result) PubSub.publish('updateItem',{index:this.index,result:result})
      console.log('publish之后')
    }
  },
  computed:{
    isFinish:{
      get(){
        return this.todo.finish
      },
      set(value){
        console.log(value)
        this.updateFinish(value,this.index)
      }
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
