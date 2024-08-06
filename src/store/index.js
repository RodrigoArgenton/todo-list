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
      state.dataList.push(data)  
    },
    deleteTask(state, id){
      const index = state.dataList.findIndex(task => task.id === id)
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
    async insertTask({commit}, data){
      try {
        const response = await api.postTask(data)
        commit('insertTask', data)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteTask({commit}, id){
      try {
        const response = await api.deleteTask(id)
        console.log(response)
        commit('deleteTask', id)
      } catch (error) {
        console.log(error)
      }
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
