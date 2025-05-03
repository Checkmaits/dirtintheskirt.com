<script setup></script>

<template>
  <section class="hero-section" id="hero-section">
    <div class="hero-section-inner">
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/styles/colors" as c;

.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("../assets/images/dits-header-image.png") no-repeat center 85%;
  background-size: cover;

  &-inner {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(c.$headings, 0.9);
    backdrop-filter: blur(1px);
  }
}
</style>
