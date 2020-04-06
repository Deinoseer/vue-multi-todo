<template>
  <div class="todo-item" :class="{ 'todo-item_checked': checked }">
    <div class="todo-item__check">
      <checkbox-el @input="toggleTodo" :checked="checked"></checkbox-el>
    </div>
    <div class="todo-item__text" @click="editingText = true">
      <span v-if="!editingText">{{ text }}</span>
      <label v-else class="todo-item__edit">
        <input
          type="text"
          :value="text"
          @blur="changeTodoText"
          @keyup.enter="changeTodoText"
        />
      </label>
    </div>
    <div class="todo-item__delete">
      <base-button class="button_red" @click="removeTodo">x</base-button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    editingText: false
  }),
  props: {
    id: Number,
    checked: Boolean,
    text: String
  },
  methods: {
    removeTodo() {
      this.$emit("remove", this.id);
    },
    toggleTodo() {
      this.$emit("toggle", this.id);
    },
    changeTodoText(e) {
      this.editingText = false;
      this.$emit("change-text", this.id, e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  width: 100%;
  padding: 6px 0;
  box-sizing: border-box;
  transition: color $transition;

  &:hover & {
    &__delete {
      opacity: 1;
    }
  }

  &__check {
    margin-right: 8px;
  }
  &__text {
    position: relative;
    width: 100%;
    margin-right: 12px;
  }

  &__delete {
    margin-left: auto;
    opacity: 0.1;
    transition: opacity $transition;
  }

  &_checked {
    color: $grey-color;
    text-decoration: line-through;
  }
}
</style>
