import { createStore } from "vuex"
import api from '../services/api'

const store = createStore({
  state: {
    isDialogOpen: false,
    dataList: []
  },
  mutations: {
    popup(state) {
      state.isDialogOpen = !state.isDialogOpen
    },
    async fetchTask(state) {
      try {
        const response = await api.getTasks()
        state.dataList = response.data
      } catch (error) {
        console.error('Error fetching tasks:', error)
      }
    },
    async insertTask(state, data) {
      try {
        const response = await api.postTask(data)
        state.dataList.push(response.data)
      } catch (error) {
        console.log(error)
      }
    },
    deleteTask(state, id) {
      try {
        api.deleteTask(id)
      } catch (error) {
        console.log(error)
      }
      const taskIndex = state.dataList.findIndex(task => task.id === id)
      state.dataList.splice(taskIndex, 1)
    },
    async completeTask(state, id) {
      try {
        const updatedTask = state.dataList.find(task => task.id === id)
        updatedTask.complete = !updatedTask.complete
        await api.completeTask(id, updatedTask.complete)
      } catch (error) {
        console.log(error)
      }

    }
  },
  actions: {
    popup({ commit }) {
      commit('popup')
    },
    fetchTask({ commit }) {
      commit('fetchTask')
    },
    async insertTask({ commit }, data) {
      commit('insertTask', data)
    },
    async deleteTask({ commit }, id) {
      commit('deleteTask', id)
    },
    async completeTask({ commit }, id) {
      commit('completeTask', id)
    }
  },
  getters: {
    isDialogOpen: state => state.isDialogOpen,
    dataList: state => state.dataList,
    openTask: state => state.dataList.filter(task => !task.complete).length,
    allTask: state => state.dataList.length,
    tasksDueToday: (state) => {
      const today = new Date().toISOString().split('T')[0]
      return state.dataList.filter(task => task.dueDate.split('T')[0] === today && task.complete === false).length
    },
    tasksDueAll: (state) => {
      const today = new Date().toISOString().split('T')[0]
      return state.dataList.filter(task => task.dueDate.split('T')[0] < today && task.complete === false).length
    }
  }
})

export default store
