<template>
  <v-col md="4" cols="12">

    <v-card
        class="mx-auto"
        max-width="344"
    >
      <v-img
          height="200px"
          :src="'/img/projects/' + project.img"
          cover
      ></v-img>

      <v-card-title>
        {{ project.title }}
      </v-card-title>

      <div class="ml-4">
        <v-chip label class="mr-2 mb-2" color="green" v-for="skill in project.skills">
          {{ skill }}
        </v-chip>
      </div>

      <v-card-text>

        {{ project.description[locale] }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            v-if="project.link"
            color="#669db3"
            :text="t('seeongit')"
            variant="outlined"
            :href="project.link"
        ></v-btn>

        <v-btn
            v-if="project.doclink"
            color="#669db3"
            :text="t('seedoc')"
            variant="outlined"
            :href="project.doclink"
        ></v-btn>

        <v-spacer></v-spacer>

      </v-card-actions>

    </v-card>
  </v-col>
</template>

<script setup lang="ts">
const {t, locale} = useI18n({useScope: 'global'})

const props = defineProps({
  project: {
    type: Object as any,
    required: true,
  },
});
</script>
