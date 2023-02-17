<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import type { Picture } from '@/types'
import { searchBus } from '@/composables/eventBus'
import PicturesItem from './PicturesItem.vue'

const search = ref<string>('')
const pictures = ref<Picture[]>([])
const filteredPictures = computed(() => {
  return pictures.value.filter(picture => {
    return picture.title.toLowerCase().includes(search.value.toLowerCase())
  })
})

const cart = useLocalStorage('cart', [])

const unsubscribe = searchBus.on((value: string) => search.value = value)

fetch('/pictures.json')
  .then(res => res.json())
  .then(res => pictures.value = res);

function updateCart(id: number): void {
  const idx = cart.value.findIndex(item => item === id)
  if (idx !== -1) {
    cart.value.splice(idx, 1)
    return
  }
  // @ts-expect-error: broken plugin types
  cart.value.push(id)
}

onBeforeUnmount(() => unsubscribe())
</script>

<template>
  <div class="pictures">
    <PicturesItem
      v-for="picture in filteredPictures"
      :key="picture.id"
      :picture="picture"
      :cart="cart"
      @update-cart="updateCart"
    />
    <p v-if="filteredPictures.length === 0">Ничего не найдено...</p>
  </div>
</template>

<style lang="scss">
.pictures {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

@media only screen and (max-width: 1200px) {
  .pictures {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 880px) {
  .pictures {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 580px) {
  .pictures {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
