<template>
  <v-container class="fill-height justify-center">
    <v-card max-width="400" class="mx-auto text-center pa-6" elevation="4">
      <v-avatar color="primary" size="64" class="mb-4">
        <v-icon icon="mdi-account" color="white" size="32"></v-icon>
      </v-avatar>
      <v-card-title class="text-h5 justify-center">О проекте</v-card-title>
      <v-card-text class="text-body-1 text-medium-emphasis mt-2">
        Продвинутый список дел, созданный на Vue 3, Vuetify и Vue Router 4 в
        рамках практики в Октагон (1С-Форус). 
      </v-card-text>
      <v-card-actions class="justify-center mt-4">
        <v-btn
          color="primary"
          variant="text"
          href="https://github.com/MajestY999"
          target="_blank"
        >
          Мой GitHub
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
