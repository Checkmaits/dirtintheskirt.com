<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="icon-block">
    <i class="icon-block-icon bg-white shadow-sm" :class="icon"></i>
    <div class="icon-block-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../../assets/styles/colors" as c;

.icon-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  &-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    font-size: 20px;
    color: c.$primary;
    border-radius: 0.5rem;
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
}
</style>
