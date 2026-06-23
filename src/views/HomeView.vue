<template>
  <v-container class="mt-5" max-width="600">
    <v-card class="pa-5" elevation="3">
      <v-card-title class="text-h4 text-center mb-4">Список дел</v-card-title>

    
      <v-form @submit.prevent="addTodo" class="d-flex align-center gap-2 mb-4">
        <v-text-field
          v-model.trim="newTodoText"
          label="Что нужно сделать?"
          variant="outlined"
          density="comfortable"
          hide-details
          class="flex-grow-1"
        ></v-text-field>
        
        <v-btn 
          type="submit" 
          color="primary" 
          height="48"
          :disabled="!newTodoText"
          elevation="1"
        >
          Добавить
        </v-btn>
      </v-form>

  
      <v-list v-if="todos.length > 0" lines="one">
        <v-list-item 
          v-for="todo in todos" 
          :key="todo.id"
          class="border-bottom py-2 px-0"
        >
          <div class="d-flex align-center w-100 task-row">
       
            <v-btn
              :icon="todo.completed ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'"
              variant="flat"
              color="white"
              :class="todo.completed ? 'check-btn-active' : 'check-btn-empty'"
              size="small"
              class="mr-3 status-btn"
              @click="todo.completed = !todo.completed"
            ></v-btn>

         
            <span :class="{ 'completed-task': todo.completed }" class="text-body-1 flex-grow-1 task-text">
              {{ todo.text }}
            </span>

        
            <v-btn 
              icon="mdi-delete-forever" 
              variant="flat" 
              color="white"
              size="small"
              class="ml-2 delete-btn-right"
              @click="removeTodo(todo.id)"
            ></v-btn>

          </div>
        </v-list-item>
      </v-list>

      <v-card-text v-else class="text-center text-grey text-body-1 py-4">
        Список дел пуст. Отдыхай!
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'


const todos = ref([
  { id: 1, text: 'Сдать практическую работу', completed: false },
  { id: 2, text: 'Разобраться со Vue Router', completed: true },
  { id: 3, text: 'Закрыть задания в Октагоне', completed: false }
])

const newTodoText = ref('')

const addTodo = () => {
  if (!newTodoText.value) return
  todos.value.push({
    id: Date.now(),
    text: newTodoText.value,
    completed: false
  })
  newTodoText.value = ''
}


const removeTodo = (id) => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}
</script>

<style scoped>
.gap-2 {
  gap: 8px;
}
.border-bottom {
  border-bottom: 1px solid #e0e0e0;
}
.task-row {
  min-height: 48px;
}


.status-btn {
  border: 1px solid #b0bec5 !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05) !important;
}

.check-btn-empty {
  color: #2e7d32 !important; 
}

.check-btn-active {
  color: #4caf50 !important;
  background-color: #e8f5e9 !important;
}


.delete-btn-right {
  color: #1867c0 !important; 
  border: 1px solid #b0bec5 !important;
  background-color: #ffffff !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05) !important;
}
.delete-btn-right:hover {
  background-color: #f5f5f7 !important;
  color: #104380 !important;
}


.completed-task {
  text-decoration: line-through !important;
  text-decoration-thickness: 2px !important;
  text-decoration-color: #333333 !important;
  color: #9e9e9e !important;
}
</style>