<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const targetDate = new Date("2025-08-02T08:00:00");
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

let intervalId;

function updateCountdown() {
  const now = new Date();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    days.value = hours.value = minutes.value = seconds.value = 0;
    clearInterval(intervalId);
    return;
  }

  days.value = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  minutes.value = Math.floor((timeLeft / (1000 * 60)) % 60);
  seconds.value = Math.floor((timeLeft / 1000) % 60);
}

onMounted(() => {
  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <section id="numbers-section" class="bg-white shadow-sm p-5">
    <div class="d-flex flex-column flex-md-row align-items-center justify-content-evenly w-100">
      <div class="text-center">
        <h2 class="display-4 fw-bold text-primary" id="days">{{ days }}</h2>
        <p class="lead fw-normal mb-0">DAYS</p>
      </div>
      <div class="text-center mt-3 mt-md-0">
        <h2 class="display-4 fw-bold text-primary" id="hours">{{ hours }}</h2>
        <p class="lead fw-normal mb-0">HOURS</p>
      </div>
      <div class="text-center mt-3 mt-md-0">
        <h2 class="display-4 fw-bold text-primary" id="minutes">{{ minutes }}</h2>
        <p class="lead fw-normal mb-0">MINUTES</p>
      </div>
      <div class="text-center mt-3 mt-md-0">
        <h2 class="display-4 fw-bold text-primary" id="seconds">{{ seconds }}</h2>
        <p class="lead fw-normal mb-0">SECONDS</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#numbers-section {
  position: relative;
  margin: -10rem auto 0;
  width: 50%;

  @media (max-width: 1200px) {
    width: 65%;
  }
  @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 992px) {
    width: 85%;
  }
}
</style>
