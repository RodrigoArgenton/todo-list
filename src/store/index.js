import { createStore } from "vuex"


const store = createStore({
  state: {
    isDialogOpen: false,
    dataList: []
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
    },
    completeTask(state, index){
      state.dataList[index].complete = !state.dataList[index].complete
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
    },
    completeTask({commit}, index){
      commit('completeTask', index)
    }
  },
  getters: {
    isDialogOpen: state => state.isDialogOpen,
    dataList: state => state.dataList
  }
})

export default store
