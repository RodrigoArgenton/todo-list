import { createStore } from "vuex"
import api from '../services/api'

const store = createStore({
  state: {
    isDialogOpen: false,
    dataList: []
  },
  mutations: {
    popup(state){
      state.isDialogOpen = !state.isDialogOpen
    },
    setTasks(state, data){
      state.dataList = data
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
    async fetchTask({ commit }) {
      try {
        const response = await api.getTasks()
        commit('setTasks', response.data)
      } catch (error) {
        console.error('Error fetching tasks:', error)
      }
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
    dataList: state => state.dataList,
    openTask: state => state.dataList.filter(task => !task.complete).length,
    allTask: state => state.dataList.length
  }
})

export default store
