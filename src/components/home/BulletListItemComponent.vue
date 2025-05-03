<script setup></script>

<template>
  <div class="bullet-list-item">
    <i class="bi bi-arrow-right-circle"></i>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use "../../assets/styles/colors" as c;

.bullet-list-item {
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 1rem;

  i {
    color: c.$primary;
  }
}
</style>
