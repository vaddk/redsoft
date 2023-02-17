<template>
  <div class="dual-ring"></div>
</template>

<style lang="scss">
.dual-ring {
  display: inline-block;
  width: 26px;
  height: 26px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.dual-ring:after {
  content: " ";
  display: block;
  width: 24px;
  height: 24px;
  margin: 2px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  border-color: #ffffff transparent #ffffff transparent;
  animation: dual-ring 1.2s linear infinite;
}
@keyframes dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>