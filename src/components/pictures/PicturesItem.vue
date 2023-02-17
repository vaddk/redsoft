<script setup lang="ts">
import { computed } from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import type { Picture } from '@/types'
import RingPreloader from '../RingPreloader.vue'

const props = defineProps<{
  picture: Picture,
  cart: number[]
}>()

const emit = defineEmits<{
  (e: 'update-cart', value: number): void
}>()

const inCart = computed(() => props.cart.includes(props.picture.id))

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const { isPending, start } = useTimeoutFn(() => {
  emit('update-cart', props.picture.id)
}, 1500, { immediate: false })

const addToCart = (): void => {
  if (isPending.value) return
  start()
} 
</script>

<template>
  <div class="pictures-item" :class="{'pictures-item_not-available': !picture.available}">
    <img :src="picture.src" :alt="picture.title">
    <div class="pictures-item__info">
      <p class="pictures-item__title">{{ picture.title }}</p>
      <div class="pictures-item__price-wrapper">
        <div class="pictures-item__price">
          <span v-if="picture.oldPrice" class="pictures-item__price_old">{{ formatter.format(picture.oldPrice) }}</span>
          <span class="pictures-item__price_current">
            {{ picture.price && picture.available ? formatter.format(picture.price) : 'Продана на аукционе' }}
          </span>
        </div>
        <button
          v-if="picture.available"
          type="button"
          class="button pictures-item__button"
          :class="{ 'button_checked': inCart && !isPending }"
          :disabled="isPending"
          @click="addToCart"
        >
          <RingPreloader v-if="isPending" />
          <span v-else>{{ inCart ? 'В корзине' : 'Купить' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pictures-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #E7E7E7;
  transition: border-color 0.2s;

  &_not-available {
    opacity: 0.5;
  }

  &:hover {
    border-color: #B5B5B5;
  }

  & > img {
    display: block;
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  &__info {
    padding: 20px 24px;
  }

  &__title {
    height: 54px;
    overflow-y: hidden;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    color: #343030;
    margin-bottom: 22px;
  }

  &__price-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__price {
    &_old {
      font-size: 14px;
      font-weight: 300;
      line-height: 1.5;
      color: #A0A0A0;
      text-decoration: line-through;
      margin-bottom: 5px;
    }
    &_current {
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
      color: #343030;
    }
    span {
      display: block;
    }
  }

  &__button {
    position: relative;
    min-height: 49px;
    min-width: 110px;
  }
}

@media only screen and (max-width: 1600px) {
  .pictures-item__price_current {
    font-size: 14px;
  }
}
</style>
