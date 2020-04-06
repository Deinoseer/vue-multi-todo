import { getMaxId } from "@/utils/helpers";

const state = {
  lists: [
    { id: 1, title: "Something" },
    { id: 2, title: "Home" },
    { id: 3, title: "Job" }
  ]
};

const getters = {
  lists: state => state.lists
};

const mutations = {
  addList(state, data) {
    let id = getMaxId(state.lists);
    state.lists.push({
      id: ++id,
      title: data.title
    });
  },
  deleteList(state, id) {
    const index = state.lists.findIndex(list => list.id === id);
    state.lists.splice(index, 1);
  },
  changeListTitle(state, data) {
    state.lists.find(list =>
      list.id === data.id ? (list.title = data.title) : false
    );
  }
};

const actions = {
  addList(context, data) {
    context.commit("addList", data);
  },
  deleteList(context, id) {
    context.commit("deleteList", id);
  },
  changeListTitle(context, data) {
    context.commit("changeListTitle", data);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
