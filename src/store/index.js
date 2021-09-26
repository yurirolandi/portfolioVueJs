import Vue from "vue";
import Vuex from "vuex";
import githutb from "./modules/github";
import githubRepos from "./modules/githubRepos";
import loading from "./modules/loading";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    githutb,
    loading,
    githubRepos,
  },
});
