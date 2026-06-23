<template>
  <v-container class="mt-5" max-width="600">
    <v-card class="pa-5" elevation="3">
      <v-card-title class="text-h4 text-center mb-4">{{
        $t("home")
      }}</v-card-title>

      <v-form
        @submit.prevent="submitTodo"
        class="d-flex align-center gap-2 mb-4"
      >
        <v-text-field
          v-model.trim="newTodoText"
          :label="$t('inputPlaceholder')"
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
          {{ $t("addButton") }}
        </v-btn>
      </v-form>

      <div v-if="todos.length > 0" class="todo-list-container">
        <TodoCard v-for="todo in todos" :key="todo.id">
          <div class="d-flex align-center w-100 task-row">
            <v-btn
              :icon="
                todo.completed
                  ? 'mdi-checkbox-marked'
                  : 'mdi-checkbox-blank-outline'
              "
              variant="flat"
              color="white"
              :class="todo.completed ? 'check-btn-active' : 'check-btn-empty'"
              size="small"
              class="mr-3 status-btn"
              @click="toggleTodoStatus(todo.id)"
            ></v-btn>

            <span
              :class="{ 'completed-task': todo.completed }"
              class="text-body-1 flex-grow-1 task-text"
            >
              {{ todo.text }}
            </span>

            <v-btn
              icon="mdi-delete-forever"
              variant="flat"
              color="white"
              size="small"
              class="ml-2 delete-btn-right"
              @click="deleteTodo(todo.id)"
            ></v-btn>
          </div>
        </TodoCard>
      </div>

      <v-card-text v-else class="text-center text-grey text-body-1 py-4">
        {{ $t("emptyList") }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import TodoCard from "@/components/TodoCard.vue";

const store = useStore();
const newTodoText = ref("");

const todos = computed(() => store.getters.allTodos);

const submitTodo = () => {
  if (!newTodoText.value) return;
  store.dispatch("addTodo", newTodoText.value);
  newTodoText.value = "";
};

const toggleTodoStatus = (id) => {
  store.dispatch("toggleTodo", id);
};

const deleteTodo = (id) => {
  store.dispatch("removeTodo", id);
};
</script>

<style scoped>
.gap-2 {
  gap: 8px;
}
.todo-list-container {
  margin-top: 15px;
}
.task-row {
  min-height: 48px;
}


.task-text {
  color: #000000 !important;
  font-weight: 500;
}

.status-btn {
  border: 1px solid #b0bec5 !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
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
