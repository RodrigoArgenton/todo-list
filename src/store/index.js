import { createStore } from "vuex"


const store = createStore({
  state: {
    isDialogOpen: false,
    dataList: [
      { id: 1, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo voluptates obcaecati consequatur ea sequi assumenda at, repellendus culpa repudiandae odio corporis, sed cumque magni cupiditate. Eum eveniet porro voluptatum.", title: "teste 1" },
      { id: 2, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo voluptates obcaecati consequatur ea sequi assumenda at, repellendus culpa repudiandae odio corporis, sed cumque magni cupiditate. Eum eveniet porro voluptatum.", title: "teste 2" },
      { id: 3, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo voluptates obcaecati consequatur ea sequi assumenda at, repellendus culpa repudiandae odio corporis, sed cumque magni cupiditate. Eum eveniet porro voluptatum.", title: "teste 3" },
      { id: 4, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo voluptates obcaecati consequatur ea sequi assumenda at, repellendus culpa repudiandae odio corporis, sed cumque magni cupiditate. Eum eveniet porro voluptatum.", title: "teste 4" },
      { id: 5, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo voluptates obcaecati consequatur ea sequi assumenda at, repellendus culpa repudiandae odio corporis, sed cumque magni cupiditate. Eum eveniet porro voluptatum.", title: "teste 5" },
  ]
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
    isDialogOpen: state => state.isDialogOpen,
    dataList: state => state.dataList
  }
})

export default store
