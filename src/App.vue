<template>
  <div class="todo-app">
    <header class="app-header">
      <h1>Список дел</h1>
      <p class="subtitle">Учебный проект на Vue 3</p>
    </header>

    <form @submit.prevent="addTodo" class="todo-form">
      <input 
        v-model.trim="newTodoText" 
        type="text" 
        placeholder="Что нужно сделать?" 
      />
      <button type="submit" :disabled="!newTodoText">Добавить</button>
    </form>

    <div class="todo-filters" v-if="todos.length > 0">
      <button 
        @click="filter = 'all'" 
        :class="{ active: filter === 'all' }"
      >Все ({{ todos.length }})</button>
      <button 
        @click="filter = 'active'" 
        :class="{ active: filter === 'active' }"
      >Активные</button>
      <button 
        @click="filter = 'completed'" 
        :class="{ active: filter === 'completed' }"
      >Завершенные</button>
    </div>

    <ul class="todo-list">
      <li 
        v-for="todo in filteredTodos" 
        :key="todo.id" 
        :class="{ completed: todo.completed }"
      >
        <label class="todo-item-label">
          <input 
            type="checkbox" 
            v-model="todo.completed"
          />
          <span class="todo-text">{{ todo.text }}</span>
        </label>
        <button @click="removeTodo(todo.id)" class="delete-btn">&times;</button>
      </li>
    </ul>

    <p v-if="filteredTodos.length === 0" class="empty-state">
      {{ emptyMessage }}
    </p>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import './assets/style.css';

export default {
  name: 'App',
  setup() {
    const savedTodos = localStorage.getItem('my-todo-tasks');
    
    const todos = ref(savedTodos ? JSON.parse(savedTodos) : [
      { id: 1, text: 'Изучить синтаксис Vue 3', completed: true },
      { id: 2, text: 'Закинуть пороект на GitHub', completed: false }
    ]);

    const newTodoText = ref('');
    const filter = ref('all');

    watch(todos, (newVal) => {
      localStorage.setItem('my-todo-tasks', JSON.stringify(newVal));
    }, { deep: true });

    const addTodo = () => {
      if (!newTodoText.value) return;
      todos.value.push({
        id: Date.now(),
        text: newTodoText.value,
        completed: false
      });
      newTodoText.value = '';
    };

    const removeTodo = (id) => {
      todos.value = todos.value.filter(todo => todo.id !== id);
    };

    const filteredTodos = computed(() => {
      if (filter.value === 'active') {
        return todos.value.filter(todo => !todo.completed);
      }
      if (filter.value === 'completed') {
        return todos.value.filter(todo => todo.completed);
      }
      return todos.value;
    });

    const emptyMessage = computed(() => {
      if (filter.value === 'active') return 'Нет активных задач.';
      if (filter.value === 'completed') return 'Нет завершенных задач.';
      return 'Список дел пуст.';
    });

    return {
      todos,
      newTodoText,
      filter,
      filteredTodos,
      emptyMessage,
      addTodo,
      removeTodo
    };
  }
};
</script>