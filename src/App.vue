<template>
  <v-app>
    <v-main class="bg-grey-lighten-4">
      <v-container>
        <v-row justify="center" class="mt-10">
          <v-col cols="12" sm="8" md="6">
            
            <v-card class="pa-6" elevation="2">
              <v-card-title class="text-center text-h5 mb-4">Список дел</v-card-title>

              <div class="d-flex gap-2 mb-4">
                <v-text-field
                  v-model.trim="newTodoText"
                  label="Что нужно сделать?"
                  variant="outlined"
                  hide-details
                  @keyup.enter="addTodo"
                ></v-text-field>
                
                <v-btn 
                  color="primary" 
                  height="56"
                  @click="addTodo"
                >
                  Добавить
                </v-btn>
              </div>

              <v-list>
                <v-list-item v-for="todo in filteredTodos" :key="todo.id" border class="mb-2">
                  <template #prepend>
                    <v-checkbox-btn v-model="todo.completed"></v-checkbox-btn>
                  </template>
                  
                  <v-list-item-title :class="{ 'text-decoration-line-through text-grey': todo.completed }">
                    {{ todo.text }}
                  </v-list-item-title>

                  <template #append>
                    <v-btn icon="mdi-delete" variant="text" color="error" @click="removeTodo(todo.id)"></v-btn>
                  </template>
                </v-list-item>
              </v-list>

              <div v-if="filteredTodos.length === 0" class="text-center text-grey mt-4">
                {{ emptyMessage }}
              </div>

            </v-card>

          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  name: 'App',
  setup() {
    // Временно жестко прописываем массив, игнорируя localStorage
    const todos = ref([
      { id: 1, text: 'Убраться дома', completed: false },
      { id: 2, text: 'Закинуть проект на GitHub', completed: false }
    ]);

    const newTodoText = ref('');
    const filter = ref('all');

    

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
      if (filter.value === 'active') return todos.value.filter(todo => !todo.completed);
      if (filter.value === 'completed') return todos.value.filter(todo => todo.completed);
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
  }}
</script>

