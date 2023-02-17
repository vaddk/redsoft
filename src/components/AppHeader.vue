<script setup lang="ts">
import MainMenu from './MainMenu.vue'
import MainSearch from './MainSearch.vue'
</script>

<template>
  <header>
    <div class="container container_flex container_justify-between">
      <MainMenu />
      <MainSearch />
    </div>
  </header>
</template>

<style lang="scss">
header {
  padding: 24px 0;
  border-bottom: 1px solid #E1E1E1;
}
</style>