<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  darkLogo?: boolean
}
withDefaults(defineProps<Props>(), {
  darkLogo: false
})

interface Link {
  title: string
  to: string
}

const links: Link[] = [
  { title: 'Каталог', to: '/catalog' },
  { title: 'Доставка', to: '/delivery' },
  { title: 'Оплата', to: '/payment' },
  { title: 'Контакты', to: '/contacts' },
  { title: 'О галерее', to: '/about' },
]
</script>

<template>
  <nav class="main-menu">
    <ul>
      <li>
        <router-link to="/">
          <img
            :src="`/images/logo${darkLogo ? '_darker' : ''}.svg`"
            alt="Главная"
            class="main-menu__logo"
          >
        </router-link>
      </li>
      <li v-for="(link, index) in links" :key="index">
        <router-link
          :to="link.to"
          class="main-menu__link"
        >{{ link.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.main-menu {
  display: inline-block;

  ul {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    & > li {
      margin-right: 48px;

      &:first-child {
        display: flex;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__logo {
    display: inline-block;
    width: 48px;
    height: 48px;
  }

  &__link {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: #343030;
  }
}

@media only screen and (max-width: 1100px) {
  .main-menu ul > li {
    margin-right: 24px
  }
}

@media only screen and (max-width: 990px) {
  .main-menu ul > li:not(:first-child) {
    display: none
  }
}
</style>
