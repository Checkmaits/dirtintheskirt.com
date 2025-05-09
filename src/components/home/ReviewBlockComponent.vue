<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="review-block bg-white">
    <p class="review-block-content">{{ content }}</p>
    <div class="d-flex align-items-center gap-3 mt-4">
      <img :src="icon" alt="Review Block Icon" class="review-block-icon" />
      <div class="d-flex flex-column align-items-start">
        <h5 class="review-block-name">{{ name }}</h5>
        <span class="review-block-type">{{ type }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/colors" as c;

.review-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid c.$borders;
  width: 100%;
  height: 400px;

  @media (max-width: 992px) {
    height: 300px;
  }

  &-content,
  &-name,
  &-type {
    margin: 0;
  }

  &-content {
    color: c.$headings;
    font-style: italic;
  }

  &-name {
    font-size: 1rem;
  }

  &-type {
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  &-icon {
    width: 50px;
    height: 50px;
    border: 2px solid c.$primary;
    border-radius: 50%;
  }
}
</style>
