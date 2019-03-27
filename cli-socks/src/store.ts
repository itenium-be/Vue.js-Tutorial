import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // ~ component.data
  state: {
    count: 0
  },

  // ~ component.methods
  actions: {},

  // ~ component.computed
  getters: {
    countAlias(state) {
      return state.count;
    }
  },

  // ~ redux.actions
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
});
