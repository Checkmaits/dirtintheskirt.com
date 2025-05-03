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
    <div class="icon-block-icon">
      <i :class="icon"></i>
    </div>
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
  align-items: flex-start;
  gap: 1rem;

  &-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 45px;
    height: 45px;
    background-color: rgba(c.$primary, 0.1);
    border-radius: 0.5rem;

    i {
      font-size: 25px;
      color: c.$primary;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
}
</style>
