<template>
  <div class="todo-item" :class="{ 'todo-item_checked': checked }">
    <div class="todo-item__check">
      <checkbox-el @input="toggleTodo" :checked="checked"></checkbox-el>
    </div>
    <div class="todo-item__text" @click.capture="openEditor">
      <span v-if="!editingText">{{ text }}</span>
      <label v-else class="todo-item__edit">
        <span class="todo-item__text-enter enter" @click="changeTodoText">
          Enter
        </span>
        <input
          ref="inputText"
          type="text"
          :value="text"
          @keyup.enter="changeTodoText"
        />
      </label>
    </div>
    <div class="todo-item__delete">
      <base-button class="button_delete" @click="removeTodo">x</base-button>
    </div>
  </div>
</template>

<script>
import close from "@/mixins/close";

export default {
  mixins: [close],
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
    changeTodoText() {
      this.editingText = false;
      this.$emit("change-text", this.id, this.$refs.inputText.value);
    },
    openEditor() {
      this.editingText = true;
      this.$nextTick(() => {
        this.$refs.inputText.focus();
      });
    },
    escKeyup() {
      this.editingText = false;
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

  &__check {
    margin-right: 8px;
  }
  &__text {
    position: relative;
    width: 100%;
    margin-right: 12px;

    &-enter {
      position: absolute;
      z-index: 1;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__delete {
    margin-left: auto;
  }

  &_checked {
    color: $grey-color;
    text-decoration: line-through;
  }
}
</style>
