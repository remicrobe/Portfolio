<template>
  <v-container class="mt-15">
    <v-row
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
    >
      <v-col md="6" cols="12" class="text-center">
        <v-img src="/img/remi.png"></v-img>
      </v-col>

      <v-col md="6" cols="12" class="align-center pt-15">
        <span class="ml-8 title">{{ t('welcome') }}</span>

        <div class="ml-8">
          <p v-html="t('mydescription')"></p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { t, locale } = useI18n({ useScope: 'global' })

useHead({
  title: 'WEIL Rémi - Developer',
  meta: [
    { name: 'description', content: 'A small portfolio of an software engeneer.' }
  ]
})
</script>

<style scoped>
.title {
  font-size: 28px;
  font-weight: 500;
}

p {
  text-align: justify;
  font-weight: 400;
}

</style>