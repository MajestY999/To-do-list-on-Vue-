import { createStore } from 'vuex'

export default createStore({

  state() {
    return {
      todos: [
        { id: 1, text: 'Сдать практическую работу', completed: false },
        { id: 2, text: 'Разобраться со Vue Router', completed: true },
        { id: 3, text: 'Изучить Vuex для управления состоянием', completed: false }
      ]
    }
  },
  

  mutations: {
    ADD_TODO(state, text) {
      state.todos.push({
        id: Date.now(),
        text: text,
        completed: false
      })
    },
    REMOVE_TODO(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    TOGGLE_TODO(state, id) {
      const todo = state.todos.find(todo => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  },
  

  actions: {
    addTodo({ commit }, text) {
      commit('ADD_TODO', text)
    },
    removeTodo({ commit }, id) {
      commit('REMOVE_TODO', id)
    },
    toggleTodo({ commit }, id) {
      commit('TOGGLE_TODO', id)
    }
  },
  

  getters: {
    allTodos: (state) => state.todos,
    totalCount: (state) => state.todos.length,
    completedCount: (state) => state.todos.filter(t => t.completed).length
  }
})