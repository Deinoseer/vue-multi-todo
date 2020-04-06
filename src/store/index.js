import Vue from "vue";
import Vuex from "vuex";
import todo from "./modules/todo";
import list from "./modules/list";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    list,
    todo
  },
  plugins: [createPersistedState()]
});
