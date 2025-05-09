<script setup>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import ReviewBlockComponent from "./ReviewBlockComponent.vue";
import "vue3-carousel/carousel.css";
import { onMounted, ref } from "vue";

const reviews = ref([]);
const reviewsLoading = ref(true);
const reviewsError = ref(false);

const carouselConfig = {
  itemsToShow: 1,
  autoplay: 2000,
  gap: 20,
  wrapAround: false,

  breakpointMode: "viewport",
  breakpoints: {
    768: { itemsToShow: 2 },
    992: { itemsToShow: 3 },
    1200: { itemsToShow: 4 },
  },
};

onMounted(async () => {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/v1/reviews`);
  const responseData = await response.json();
  if (!response.ok) {
    reviewsError.value = responseData.message;
  } else {
    reviews.value = responseData.data;
    reviews.value.reverse();
  }

  reviewsLoading.value = false;
});
</script>

<template>
  <section id="reviews-section" class="bg-light" style="padding: 8rem 0px">
    <div class="container-fluid container-lg">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <h2 class="section-title">Reviews</h2>
        <div class="half-width text-center mt-5">
          <p class="mb-0">Hear from the teams, players, and sponsors who loved previous years of Dirt in the Skirt.</p>
        </div>
        <div v-if="reviewsLoading" class="spinner spinner-border text-dark mt-5"></div>
        <div v-else-if="reviewsError" class="alert alert-danger mt-5">{{ reviewsError }}</div>
        <Carousel v-else v-bind="carouselConfig" class="mt-5 w-100">
          <Slide v-for="(review, index) in reviews" :key="index">
            <ReviewBlockComponent :name="review.name" :content="review.content" :type="review.type" :icon="review.icon" />
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.review-section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
