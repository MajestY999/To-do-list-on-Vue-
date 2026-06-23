<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-format-list-checks"
          :title="$t('home')"
          to="/"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-information"
          :title="$t('about')"
          to="/about"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>{{ $t("title") }}</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn variant="outlined" class="mr-4" @click="toggleLanguage">
        {{ locale === "ru" ? "EN" : "RU" }}
      </v-btn>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const drawer = ref(true);


const { locale } = useI18n();


const toggleLanguage = () => {
  locale.value = locale.value === "ru" ? "en" : "ru";
};
</script>
