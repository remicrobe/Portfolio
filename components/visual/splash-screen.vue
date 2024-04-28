

<template>
  <div :class="{ loader: true, fadeout: !loading }">
    Chargement en cours
  </div>
</template>

<script setup lang="ts">
  let loading = ref(true);

  onMounted(() => {
    loading.value = false;
  })
</script>

<style scoped>
.loader {
  background-color: #63ab97;
  bottom: 0;
  color: white;
  display: block;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  padding-top: 10vh;
  position: absolute;
  right: 0;
  text-align: center;
  z-index: 999;
  top: 0;
}

.fadeout {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>