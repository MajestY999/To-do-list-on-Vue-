<template>
  <v-container class="fill-height justify-center">
    <v-card max-width="450" class="mx-auto text-center pa-6" elevation="4">
      <v-avatar color="primary" size="64" class="mb-4">
        <v-icon icon="mdi-account" color="white" size="32"></v-icon>
      </v-avatar>

      <v-card-title class="text-h5 justify-center">
        {{ $t("aboutTitle") }}
      </v-card-title>

      <v-card-text class="text-body-1 text-medium-emphasis mt-2">
        {{ $t("aboutText") }}
      </v-card-text>

      <v-card-actions class="justify-center mt-4">
        <v-btn
          color="primary"
          variant="outlined"
          href="https://github.com/MajestY999/To-do-list-on-Vue-"
          target="_blank"
        >
          {{ locale === "ru" ? "Открыть репозиторий" : "Open Repository" }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>
