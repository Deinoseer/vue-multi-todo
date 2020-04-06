<template>
  <div class="todo-main">
    <todo-list
      v-for="list in lists"
      :id="list.id"
      :key="list.id"
      :title="list.title"
      @toggle-todo="toggleTodo"
      @add-todo="addTodo"
      @delete-todo="confirmDelete"
      @delete-list="confirmDelete"
      @change-title="changeTitle"
      @change-text="changeTodoText"
    ></todo-list>
    <div class="todo-main__btns">
      <base-button class="button_green" @click="addToDoList">
        add List
      </base-button>
    </div>
    <modal v-show="showModal">
      <modal-confirm @modal-close="modalAction">
        You trying to delete this item, it will be deleted immediately
      </modal-confirm>
    </modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import emitter from "@/mixins/emitter";
import Modal from "Common/modal";
import ModalConfirm from "Common/modal/modalConfirm";
import TodoList from "Components/todoes/todoList";

export default {
  components: { TodoList, Modal, ModalConfirm },
  mixins: [emitter],
  data: () => ({
    selectedId: null,
    selectedType: "",
    showModal: false
  }),
  computed: {
    ...mapGetters("list", ["lists"])
  },
  methods: {
    ...mapActions("list", ["addList", "deleteList", "changeListTitle"]),
    ...mapActions("todo", [
      "addTodo",
      "changeTodoText",
      "toggleTodo",
      "deleteTodo",
      "deleteToDoesByListId"
    ]),
    addToDoList() {
      this.addList({
        title: "New List"
      });
    },
    confirmDelete(id, type) {
      this.showModal = true;
      this.selectedId = id;
      this.selectedType = type;
    },
    deleteToDoItem(id) {
      this.deleteTodo(id);
      this.emitSuccess("ToDo deleted");
    },
    deleteToDoList(id) {
      this.deleteToDoesByListId(id);
      this.deleteList(id);
      this.emitSuccess("List deleted");
    },
    changeTitle(id, title) {
      this.changeListTitle({ id, title });
    },
    modalAction(confirm) {
      this.showModal = false;
      this.$nextTick().then(() => {
        if (!confirm) {
          return;
        }
        if (this.selectedType === "list") {
          this.deleteToDoList(this.selectedId);
        }
        if (this.selectedType === "todo") {
          this.deleteToDoItem(this.selectedId);
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.todo-main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(180px, auto);
  position: relative;
  padding: 55px 55px 0;

  @media all and (max-width: 1550px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media all and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 850px) {
    padding: 55px 15px 0;
    grid-template-columns: repeat(1, 1fr);
  }

  &__btns {
    align-self: center;
    margin-top: -$box-shadow-offset;
    @media all and (max-width: 850px) {
      justify-self: center;
    }
  }
}
</style>
