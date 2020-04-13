<template>
  <div class="todo-list shadow-wave">
    <div class="todo-list__title" @click="editingTitle = true">
      <span v-if="!editingTitle">{{ title }}</span>
      <label v-else>
        <input
          type="text"
          :value="title"
          @blur="changeListTitle"
          @keyup.enter="changeListTitle"
        />
      </label>
    </div>
    <div class="todo-list__add-todo">
      <label>
        <input type="text" v-model="newTodo" @keyup.enter="addTodo" />
        <base-button class="button_green" @click="addTodo">Add</base-button>
      </label>
    </div>
    <div class="todo-list__items">
      <transition-group name="todo" tag="div">
        <todo-item
          :key="todo.id"
          v-for="todo in toDoes"
          :id="todo.id"
          :text="todo.text"
          :checked="todo.checked"
          @remove="deleteTodo"
          @change-text="changeText"
          @toggle="toggleTodo"
        ></todo-item>
      </transition-group>
    </div>
    <div class="todo-list__btns">
      <base-button class="button_yellow" @click="deleteToDoList">x</base-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import todoItem from "Components/todoes/todoItem";
import emitter from "@/mixins/emitter";

export default {
  components: { todoItem },
  mixins: [emitter],
  data: () => ({
    editingTitle: false,
    newTodo: ""
  }),
  props: {
    id: Number,
    title: String
  },
  computed: {
    ...mapGetters("todo", ["toDoesById"]),
    toDoes() {
      return this.toDoesById(this.id);
    }
  },
  methods: {
    toggleTodo(id) {
      this.$emit("toggle-todo", id);
    },
    deleteTodo(id) {
      this.$emit("delete-todo", id, "todo");
    },
    deleteToDoList() {
      if (this.toDoes.filter(todo => !todo.checked).length) {
        this.emitError("You can't delete non empty or non fully checked list");
        return;
      }
      this.$emit("delete-list", this.id, "list");
    },
    changeListTitle(e) {
      this.editingTitle = false;
      this.$emit("change-title", this.id, e.target.value);
    },
    addTodo() {
      if (!this.newTodo) {
        return;
      }
      this.$emit("add-todo", {
        listId: this.id,
        text: this.newTodo,
        checked: false
      });
      this.$nextTick().then(() => {
        this.newTodo = "";
      });
    },
    changeText(id, text) {
      this.$emit("change-text", { id, text });
    }
  }
};
</script>

<style scoped lang="scss">
.todo-list {
  position: relative;
  width: calc(100% - #{$box-shadow-offset});
  margin-bottom: 52px;
  background: transparent;
  padding: 15px;
  color: $green-color;
  @include shadowWave();

  &:hover & {
    &__btns {
      visibility: visible;
      opacity: 1;
      right: -$box-shadow-offset;
      top: -22px;
    }
  }

  &__title {
    @include font(18px, $white-color, 400);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 12px;

    label,
    input {
      width: 100%;
      height: 32px;
      @include font(18px, $white-color, 400);
    }
  }
  &__add-todo {
    label {
      width: 100%;
      display: flex;
      align-items: center;
    }

    input {
      flex: 1;

      & + button {
        margin-left: 12px;
      }
    }
  }
  &__items {
    margin: 6px 0;
  }
  &__btns {
    position: absolute;
    right: -$box-shadow-offset;
    top: 0;
    visibility: hidden;
    opacity: 0;
    height: 100%;
    width: 50px;
    text-align: center;
    transition: all $transition;
    @media all and (max-width: 850px) {
      visibility: visible;
      opacity: 1;
      right: -$box-shadow-offset;
      top: -22px;
    }
  }
  @include translateX(todo);
}
</style>
