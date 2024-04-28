

<template>
  <v-col md="4" cols="12" class="text-center mt-5">

    <div>
      <v-icon size="50" color="#d49551"> {{skill.icon }}</v-icon>
    </div>
    <span class="subtitle">{{ skill.type[locale] }}</span>

    <v-row justify="center">
      <v-divider class="mt-5" length="250"></v-divider>
    </v-row>

    <div class="mt-5">
      {{ skill.skills.join(', ') }}
    </div>
  </v-col>
</template>

<script setup lang="ts">
const {t, locale} = useI18n({useScope: 'global'})

const props = defineProps({
  skill: {
    type: Object as any,
    required: true,
  },
});
</script>