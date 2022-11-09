import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    counterDouble(state) {
      return state.counter * 2
    },
  },
  mutations: {
    INCREASE(state, count) {
      state.counter = count-1
    },
    INCREASE(state, count) {
      state.counter = count+1
    },
  },
  actions: {

  },
  modules: {
  }
})
