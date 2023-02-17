<script setup lang="ts">
import MainMenu from './MainMenu.vue'
</script>

<template>
  <footer>
    <div class="container container_flex container_justify-between">
      <MainMenu dark-logo />
      <div class="footer-contacts">
        <a href="tel:+7 (495) 555-55-55" class="footer-contacts__phone">
          +7 (495) 555-55-55
        </a>
        <span class="footer-contacts__address">
          г. Москва, ул. Расплетина, 24
        </span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  flex: 0 0 auto;
  padding: 24px 0;
  background-color: #ECEAEA;

  .main-menu__link {
    color: #555555;

    &:hover {
      color: #343030;
    }
  }
}

.footer-contacts {
  display: inline-flex;
  align-items: center;

  .footer-contacts__phone,
  .footer-contacts__address {
    position: relative;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: #555555;
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: 50%;
      left: -24px;
      transform: translateY(-50%);
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  .footer-contacts__phone::before {
    width: 16px;
    height: 16px;
    background-image: url('/images/icons/phone.svg')
  }

  .footer-contacts__address::before {
    width: 13px;
    height: 16px;
    background-image: url('/images/icons/address.svg')
  }

  .footer-contacts__phone {
    margin-right: 48px;
  }
}

@media only screen and (max-width: 580px) {
  .footer-contacts {
    display: none;
  }
}
</style>
