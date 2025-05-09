<script setup>
import HeroSectionComponent from "../components/HeroSectionComponent.vue";
import SpacerComponent from "../components/SpacerComponent.vue";
import AboutSponsorSectionComponent from "../components/sponsor/AboutSponsorSectionComponent.vue";
import SponsorsTiersSection from "../components/sponsor/SponsorsTiersSection.vue";
import { onMounted, ref } from "vue";

const sponsorshipDeck = ref("");
const sponsorshipDeckLoading = ref(true);
const sponsorshipDeckError = ref(false);

onMounted(async () => {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/v1/sponsors/deck`);
  if (response.ok) {
    const responseJson = await response.json();
    sponsorshipDeck.value = responseJson.data[0].pdfFile;
  } else {
    sponsorshipDeckError.value = true;
  }

  sponsorshipDeckLoading.value = false;
});
</script>

<template>
  <HeroSectionComponent>
    <div class="d-flex flex-column align-items-center justify-content-center">
      <div class="half-width text-center" style="padding-top: 80px">
        <h1 class="display-3 fw-bold text-white">Sponsor</h1>
        <p class="lead text-light mt-3 mb-0">
          Join us in making an impact while gaining premium exposure at
          <span class="text-primary-light">one of the most exciting women's sports events in the region.</span>
        </p>
        <div v-if="sponsorshipDeckLoading" class="spinner spinner-border text-white mt-4"></div>
        <div v-else-if="sponsorshipDeckError" class="alert alert-danger mt-4">Error fetching DITS 2025 Sponsorship Deck. Please try again later.</div>
        <a v-else :href="sponsorshipDeck" target="_blank" class="btn btn-outline-primary-light mt-4"> View Sponsorship PDF </a>
      </div>
    </div>
  </HeroSectionComponent>
  <SpacerComponent />
  <AboutSponsorSectionComponent />
  <SpacerComponent />
  <SponsorsTiersSection />
</template>

<style scoped lang="scss">
.hero-section {
  background-image: url("../assets/images/dits-sponsor-image.jpg");
  background-position: center 10%;
  height: 600px;
}

.half-width {
  width: 65%;

  @media (max-width: 992px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
