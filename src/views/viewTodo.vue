<template>
  <div class="todo-list-view">
    <h1>To-do lists</h1>
    <todo-main></todo-main>
  </div>
</template>

<script>
import todoMain from "Components/todoes";
export default {
  components: {
    todoMain
  }
};
</script>

<style scoped lang="scss">
.todo-list-view {
  h1 {
    text-align: center;
    color: $white-color;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
}
</style>
