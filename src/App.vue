<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-format-list-checks"
          title="Список дел"
          to="/"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-information"
          title="О программе"
          to="/about"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Мой Менеджер Задач</v-app-bar-title>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(true);
</script>
