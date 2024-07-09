import { createStore } from "vuex"


const store = createStore({
  state: {
    isDialogOpen: false,
    dataList: [
      {description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo voluptates obcaecati consequatur ea sequi assumenda at, repellendus culpa repudiandae odio corporis, sed cumque magni cupiditate. Eum eveniet porro voluptatum.", title: "teste 1" },
      {description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo voluptates obcaecati consequatur ea sequi assumenda at, repellendus culpa repudiandae odio corporis, sed cumque magni cupiditate. Eum eveniet porro voluptatum.", title: "teste 2" },
      {description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo voluptates obcaecati consequatur ea sequi assumenda at, repellendus culpa repudiandae odio corporis, sed cumque magni cupiditate. Eum eveniet porro voluptatum.", title: "teste 3" },
      {description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo voluptates obcaecati consequatur ea sequi assumenda at, repellendus culpa repudiandae odio corporis, sed cumque magni cupiditate. Eum eveniet porro voluptatum.", title: "teste 4" },
      {description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo voluptates obcaecati consequatur ea sequi assumenda at, repellendus culpa repudiandae odio corporis, sed cumque magni cupiditate. Eum eveniet porro voluptatum.", title: "teste 5" },
  ]
  },
  mutations: {
    popup(state){
      state.isDialogOpen = !state.isDialogOpen
    },
    insertTask(state, data){
      state.dataList.push({
        ...data,
        complete: false
      })   
    },
    deleteTask(state, index){
      state.dataList.splice(index, 1)
    }
  },
  actions: {
    popup({commit}){
      commit('popup')
    },
    insertTask({commit}, data){
      commit('insertTask', data)
    },
    deleteTask({commit}, index){
      commit('deleteTask', index)
    }
  },
  getters: {
    isDialogOpen: state => state.isDialogOpen,
    dataList: state => state.dataList
  }
})

export default store
