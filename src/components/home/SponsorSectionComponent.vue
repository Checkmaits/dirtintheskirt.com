<script setup>
import { onMounted, ref } from "vue";
import SponsorBlockComponent from "./SponsorBlockComponent.vue";

const sponsors = ref([]);
const sponsorsError = ref(null);
const sponsorsLoading = ref(true);

onMounted(async () => {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/v1/sponsors`);
  const responseData = await response.json();
  if (!response.ok) {
    sponsorsError.value = responseData.message;
  } else {
    sponsors.value = responseData.data;
  }

  sponsorsLoading.value = false;
});
</script>

<template>
  <section id="sponsors-section" class="sponsors-section">
    <div class="container-fluid container-lg">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <h2 class="section-title">Sponsors</h2>
        <div class="half-width text-center mt-5">
          <p class="mb-0">
            D.I.T.S. is built on the power of collaboration. From our dedicated volunteers and
            <span class="fw-bold text-primary">local sponsors</span> to the players, families, and fans, this event thrives because of the people who
            believe in the magic of community-driven sport.
          </p>
        </div>
        <div class="half-width d-flex align-items-center justify-content-center flex-wrap gap-5 mt-5">
          <div v-if="sponsorsLoading" class="spinner spinner-border text-primary"></div>
          <div v-else-if="sponsorsError" class="alert alert-danger">{{ sponsorsError }}</div>
          <SponsorBlockComponent
            v-else
            v-for="sponsor in sponsors"
            :brand="sponsor.brand"
            :brand-img="sponsor.logo"
            :team="sponsor.team"
            :team-img="sponsor.teamLogo"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.half-width {
  width: 65%;

  @media (max-width: 1024px) {
    width: 75%;
  }

  @media (max-width: 992px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
