<script setup>
import HeroSectionComponent from "../components/HeroSectionComponent.vue";
import NumbersSectionComponent from "../components/home/NumbersSectionComponent.vue";
import SpacerComponent from "../components/SpacerComponent.vue";
import AboutSectionComponent from "../components/home/AboutSectionComponent.vue";
import HistorySectionComponent from "../components/home/HistorySectionComponent.vue";
import SponsorSectionComponent from "../components/home/SponsorSectionComponent.vue";
import ContactSectionComponent from "../components/home/ContactSectionComponent.vue";

document.title = "Dirt in the Skirt 2025 | All-Women's Vintage-Inspired Slo-Pitch Tournament";
</script>

<template>
  <HeroSectionComponent>
    <div class="d-flex flex-column align-items-center justify-content-center text-center h-100">
      <div class="hero-section-ribbon">August 2nd, 2025 • Barrie Community Sports Complex, 8:00 AM</div>
      <h1 class="display-1 fw-bold text-white mt-3">Dirt in the Skirt <span class="text-primary-light">2025</span></h1>
      <div class="d-flex align-items-center gap-3">
        <p class="text-white mb-0">Sponsoring <span data-v-0fbbf17a="" class="fw-bold text-primary-light">Hospice Simcoe</span></p>
        <img src="../assets/images/dits-hospice-logo.png" alt="Hospice Simcoe Logo" width="35" height="35" />
      </div>
    </div>
  </HeroSectionComponent>
  <NumbersSectionComponent />
  <SpacerComponent />
  <AboutSectionComponent />
  <SpacerComponent />
  <HistorySectionComponent />
  <SpacerComponent />
  <SponsorSectionComponent />
  <SpacerComponent />
  <ContactSectionComponent />
</template>

<style scoped lang="scss">
@use "../assets/styles/colors" as c;

.hero-section-ribbon {
  --r: 0.8em;
  width: fit-content;
  padding: 0.25rem calc(var(--r) + 1.5rem);
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  clip-path: polygon(0 0, 100% 0, calc(100% - var(--r)) 50%, 100% 100%, 0 100%, var(--r) 50%);
  background: c.$primary;

  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
}
</style>
