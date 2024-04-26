<template>
  <v-app>
    <v-app-bar elevation="0" :border="true" color="appbar">
      <v-btn
          variant="text"
          :disabled="true"
          class="ml-md-16 ml-sm-0 text-transform-none force-visible"
          size="x-large"
      >
        <span>rémi </span>
        <span class="blue">weil</span>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn class="text-transform-none" variant="text" size="large">{{ t('about') }}</v-btn>
      <v-btn class="text-transform-none" variant="text" size="large">{{ t('skills') }}</v-btn>
      <v-btn class="text-transform-none" variant="text" size="large">{{ t('portfolio') }}</v-btn>
      <v-btn class="text-transform-none" variant="text" size="large">{{ t('contact') }}</v-btn>
      <translate-switcher></translate-switcher>
      <v-btn class="text-transform-none" variant="text" size="large" @click="toggleTheme" :icon="getTheme"></v-btn>

    </v-app-bar>
    <v-main>
      <slot/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import TranslateSwitcher from "~/components/translation/translate-switcher.vue";

const { t, locale } = useI18n({ useScope: 'global' })
import { useTheme } from 'vuetify'

const theme = useTheme()

import AOS from 'aos';


let getTheme = computed(() => {
  if(!theme.global.current.value.dark) {
    return 'mdi-white-balance-sunny'
  } else {
    return 'mdi-weather-night'
  }
})

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  localStorage.setItem('theme', theme.global.name.value);
}

onMounted(() => {
  onMounted(() => AOS.init());

  let selectedTheme = localStorage.getItem('theme');
  if(selectedTheme) {
    theme.global.name.value = selectedTheme
  }
})
</script>

<style>
* {
  transition: background-color 0.3s ease;
}

.text-transform-none {
  text-transform: none !important;
}

.blue {
  color: #669db3
}

.force-visible {
  opacity: 100% !important;
}
</style>