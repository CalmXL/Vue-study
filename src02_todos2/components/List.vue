<template>
  <ul class="todo-main">
    <Item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :index="index"
      :deletetodo="deletetodo"
      :updateFinish="updateFinish"
      :updateItem="updateItem"
    />
  </ul>
</template>

<script type="text/ecmascript-6">
import Item from "./Item.vue";

export default {
  props: ["todos", "deletetodo","updateFinish","updateItem"],
  components: {
    Item,
  },
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
