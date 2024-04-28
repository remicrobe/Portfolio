<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn class="text-transform-none" variant="text" size="large" icon="mdi-translate" v-bind="props"></v-btn>
    </template>
    <v-list>
      <v-list-item
          v-for="(item, index) in language"
          :key="index"
          :value="index"
          @click="switchLanguage(item.value)"
      >

        <v-list-item-title>
          <v-avatar size="25" class="mr-5">
            <v-img :src="`/img/flags/${item.value}.png`"></v-img>
          </v-avatar>
          {{ item.text }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
const { t, locale, setLocale } = useI18n({ useScope: 'global' })

let language = ref([
  {text: 'Français', value: 'FR'},
  {text: 'English', value: 'EN'},
]);

function switchLanguage (newLanguage: string) {
  setLocale(newLanguage)
  localStorage.setItem('language', newLanguage);
}

onMounted(() => {
  let selectedLanguage = localStorage.getItem('language');
  if(selectedLanguage) {
    setLocale(selectedLanguage)
  }
})
</script>
