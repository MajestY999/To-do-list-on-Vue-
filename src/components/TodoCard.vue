<template>
  <div class="todo-card-wrapper mb-3 pa-3">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped>
.todo-card-wrapper {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  transition: all 0.2s ease;
}
.todo-card-wrapper:hover {
  border-color: #b0bec5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
</style>
