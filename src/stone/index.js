import { createStore } from 'vuex';

//estrutura base
const store = createStore({
  state: {
    dataList: []
  },
  mutations: {
    addTask(state, item){
      state.dataList.push({
        ...item,
        complite: false
      })
    },
    completeTask(state, index){
      state.dataList[index].complete = !state.dataList[index].complete
    },
    deleteTask(state, index){
      state.dataList.splice(index, 1)
    }
  },
  actions: {
    addTask({commit}, item){
      commit('addTask', item)
    },
    completeTask({commit}, item){
      commit('completeTask', item)
    },
    deleteTask({commit}, item){
      commit('deleteTask', item)
    }
  },
  getters: {
    dataList: (state) => state.dataList
  },
});

export default store;
