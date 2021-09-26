import { gitHubServices } from "../../services/github";

export default {
  state: {
    gitHubRepos: [],
  },
  getters: {
    getGitHubRepos(state) {
      console.log("oi", state.gitHubRepos);
      return state.gitHubRepos;
    },
  },
  mutations: {
    setRepos(state, payload) {
      return (state.gitHubRepos = payload);
    },
  },
  actions: {
    async getUserRepos({ commit }) {
      try {
        commit("setLoading", true);
        const repo = await gitHubServices.getUserRepositories();
        commit("setRepos", repo);
        commit("setLoading", false);
      } catch (error) {
        commit("setLoading", false);
        console.error("Houve um erro - Store/getUserRepos", error);
      }
    },
  },
};
