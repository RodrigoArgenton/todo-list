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
    setTasks(state, data) {
      state.dataList = data
    },
    insertTask(state, data) {
      state.dataList.push(data)
    },
    deleteTask(state, id) {
      const taskIndex = state.dataList.findIndex(task => task.id === id)
      state.dataList.splice(taskIndex, 1)
    },
    completeTask(state, updatedTask) {
      const taskIndex = state.dataList.findIndex(task => task.id === updatedTask.id)
      if (taskIndex !== -1) {
        state.dataList[taskIndex].complete = updatedTask.complete
      }
    }
  },
  actions: {
    popup({ commit }) {
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
    async insertTask({ commit }, data) {
      try {
        const response = await api.postTask(data)
        commit('insertTask', response.data)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteTask({ commit }, id) {
      try {
        const response = await api.deleteTask(id)
        console.log(response)
        commit('deleteTask', id)
      } catch (error) {
        console.log(error)
      }
    },
    async completeTask({ commit, state }, id) {
      try {
        const updatedTask = state.dataList.find(task => task.id === id)
        updatedTask.complete = !updatedTask.complete
        const response = await api.completeTask(id, updatedTask.complete)
        if (updatedTask) {
          commit('completeTask', updatedTask)
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    isDialogOpen: state => state.isDialogOpen,
    dataList: state => state.dataList,
    openTask: state => state.dataList.filter(task => !task.complete).length,
    allTask: state => state.dataList.length,
    tasksDueToday: (state) => {
      const today = new Date().toISOString().split('T')[0];
      return state.dataList.filter(task => task.dueDate.split('T')[0] === today).length;
    }
  }
})

export default store
