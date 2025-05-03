<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  linkText: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="sponsor-tier-block text-center">
    <div class="sponsor-tier-block-icon">
      <i :class="icon"></i>
    </div>
    <slot></slot>
    <a v-if="link" :href="link" class="btn btn-outline-primary mt-4">{{ linkText }}</a>
  </div>
</template>

<style scoped lang="scss">
@use "../../assets/styles/colors" as c;

.sponsor-tier-block {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border: 1px solid c.$borders;
  border-radius: 0.5rem;

  &-icon {
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background-color: c.$primary;
    border-radius: 0.5rem;

    i {
      color: white;
      font-size: 20px;
    }
  }
}
</style>
