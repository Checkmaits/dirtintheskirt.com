<script setup>
defineProps({
  size: {
    type: String,
    default: "lg",
  },
});
</script>

<template>
  <div class="spacer" :class="{ 'spacer-sm': size === 'sm' }"></div>
</template>

<style scoped lang="scss">
.spacer {
  height: 130px;

  @media (max-width: 992px) {
    height: 80px;
  }

  &-sm {
    height: 50px;
  }
}
</style>
