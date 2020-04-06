import { getMaxId } from "@/utils/helpers";

const state = {
  toDoes: [
    { id: 1, listId: 1, text: "do something", checked: false },
    { id: 2, listId: 1, text: "do something else", checked: false },
    { id: 3, listId: 1, text: "you does wrong", checked: false },
    { id: 4, listId: 2, text: "feed a cat", checked: false },
    { id: 5, listId: 2, text: "call a mother", checked: false },
    { id: 6, listId: 3, text: "do all jobs", checked: false }
  ]
};

const getters = {
  toDoesById: state => id =>
    state.toDoes
      .filter(todo => todo.listId === id)
      .sort((a, b) => a.checked - b.checked)
};

const mutations = {
  addTodo(state, data) {
    let id = getMaxId(state.toDoes);
    state.toDoes.push({
      id: ++id,
      listId: data.listId,
      text: data.text,
      checked: data.checked
    });
  },
  deleteToDoesByListId(state, id) {
    state.toDoes = state.toDoes.filter(todo => todo.listId !== id);
  },
  deleteTodo(state, id) {
    const index = state.toDoes.findIndex(list => list.id === id);
    state.toDoes.splice(index, 1);
  },
  changeTodoText(state, data) {
    state.toDoes.find(todo =>
      todo.id === data.id ? (todo.text = data.text) : false
    );
  },
  toggleTodo(state, id) {
    state.toDoes.find(todo =>
      todo.id === id ? (todo.checked = !todo.checked) : false
    );
  }
};

const actions = {
  addTodo(context, data) {
    context.commit("addTodo", data);
  },
  deleteToDoesByListId(context, data) {
    context.commit("deleteToDoesByListId", data);
  },
  deleteTodo(context, data) {
    context.commit("deleteTodo", data);
  },
  changeTodoText(context, data) {
    context.commit("changeTodoText", data);
  },
  toggleTodo(context, data) {
    context.commit("toggleTodo", data);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
