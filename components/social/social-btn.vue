<template>
  <v-btn
      v-for="social in socialNetwork"
      :href="social.link"
      color="#669db3"
      variant="outlined"
      class="mr-5 mt-2"
  >
    {{ social.name }}
    <v-icon>{{social.icon}}</v-icon>
  </v-btn>
</template>

<script setup lang="ts">

const props = defineProps({
  socialNetwork: {
    type: Array as () => { link: string; icon: string, name: string }[],
    required: true,
  },
});
</script>

<style scoped>

</style>