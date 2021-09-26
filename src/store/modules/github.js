import { gitHubServices } from "../../services/github";

export default {
  state: {
    gitHubUser: {},
  },
  getters: {
    getGitHubUser(state) {
      return state.gitHubUser;
    },
  },
  mutations: {
    setUser(state, payload) {
      return (state.gitHubUser = payload);
    },
  },
  actions: {
    async getUserInformation({ commit }) {
      try {
        commit("setLoading", true);
        const user = await gitHubServices.getUser();
        console.log("state.gitHubUser", user);
        commit("setUser", user);
        commit("setLoading", false);
      } catch (error) {
        commit("setLoading", false);
        console.error("Houve um erro - Store/getUserInformation", error);
      }
    },
  },
};
