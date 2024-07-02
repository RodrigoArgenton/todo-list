import { createStore } from "vuex"


const store = createStore({
  state: {
    isDialogOpen: false
  },
  mutations: {
    popup(state){
      state.isDialogOpen = !state.isDialogOpen
    }
  },
  actions: {
    popup({commit}){
      commit('popup')
    }
  },
  getters: {
    isDialogOpen: (state) => state.isDialogOpen
  }
})

export default store
