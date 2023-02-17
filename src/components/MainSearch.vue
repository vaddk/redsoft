<script setup lang="ts">
import { ref, watch } from 'vue'
import { searchBus } from '@/composables/eventBus'

const emit = defineEmits<{
  (e: 'update', value: string): void
}>()

const search = ref<string>('')

watch(search, value => emit('update', value))
</script>

<template>
  <div class="main-search">
    <input
      type="text"
      class="main-search__input"
      placeholder="Поиск по названию картины"
      v-model.trim="search"
    >
    <button
      type="button"
      class="button main-search__button"
      @click="searchBus.emit(search)"
    >Найти</button>
  </div>
</template>

<style lang="scss">
.main-search {
  display: inline-flex;
  align-items: stretch;

  &__input {
    display: inline-block;
    padding: 14px 16px;
    min-width: 280px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    background-color: #F6F3F3;
    border: 1px solid #E1E1E1;
    border-right: none;
    color: #343030;
    outline: none;
    transition: border-color 0.2s;
    &::placeholder {
      color: #9F9F9F;
    }
    &:focus {
      border-color: #B5B5B5;
    }
  }
}

@media only screen and (max-width: 580px) {
  .main-search__input {
    min-width: auto;
    font-size: 13px;
  }
}
</style>
