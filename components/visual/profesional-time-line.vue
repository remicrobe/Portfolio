
<template>
  <v-timeline align="start" side="end" class="ml-md-16">
    <v-timeline-item v-for="experience in experiences"
                     dot-color="pink"
                     size="small"
    >
      <div class="d-flex">
        <div>
          <strong>{{ experience.title[locale] }} - {{ experience.company }}</strong>
          <div class="text-caption mb-1">
            {{ experience.startDate }} - {{ experience.endDate }}
          </div>
          <div class="justify">
            {{ experience.description[locale] }}
          </div>

          <v-chip label class="mr-2 mb-2" color="green" v-for="skill in experience.skills[locale]">
            {{ skill }}
          </v-chip>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
const {t, locale} = useI18n({useScope: 'global'})

const props = defineProps({
  experiences: {
    type: Array,
    required: true,
  },
});
</script>