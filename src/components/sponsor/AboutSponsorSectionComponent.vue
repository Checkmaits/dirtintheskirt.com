<script setup>
import SponsorIconBlockComponent from "./SponsorIconBlockComponent.vue";
</script>

<template>
  <section id="about-sponsor-section">
    <div class="container-fluid container-lg">
      <div class="row align-items-start align-items-xxl-center gx-5">
        <div class="col-12 col-md-6">
          <img src="../../assets/images/dits-sponsor-image-1.jpg" alt="Dirt in the Skirt (2025) About Image 2" style="width: 100%" />
        </div>
        <div class="col-12 col-md mt-5 mt-md-0">
          <h2 class="section-title">Why sponsor?</h2>
          <p class="mt-5 mb-0">
            Dirt in the Skirt is more than just a slopitch tournament—<em class="text-primary"
              >it’s a celebration of women in sports, history, and community giving.</em
            >
            Inspired by the All American Girls Professional Baseball League (AAGPBL), teams take the field in vintage-style uniforms, bringing history
            to life in a fun, competitive atmosphere.
          </p>
          <div class="d-flex flex-column align-items-start mt-4 gap-2">
            <SponsorIconBlockComponent icon="bi bi-check">
              <h3 class="fw-bold text-dark mb-1" style="font-size: 1rem">High Impact Visibility</h3>
              <p class="mb-0">Your brand showcased to athletes, families, and sports fans. Over 300+ people in attendance.</p>
            </SponsorIconBlockComponent>
            <SponsorIconBlockComponent icon="bi bi-check" class="mt-3">
              <h3 class="fw-bold text-dark mb-1" style="font-size: 1rem">Community Engagement</h3>
              <p class="mb-0">Show your support for women's sports and Hospice Simcoe.</p>
            </SponsorIconBlockComponent>
            <SponsorIconBlockComponent icon="bi bi-check" class="mt-3">
              <h3 class="fw-bold text-dark mb-1" style="font-size: 1rem">Social Media &amp; Digital Reach</h3>
              <p class="mb-0">Featured on our website, social channels, and tournament media.</p>
            </SponsorIconBlockComponent>
            <SponsorIconBlockComponent icon="bi bi-check" class="mt-3">
              <h3 class="fw-bold text-dark mb-1" style="font-size: 1rem">On-Site Activation</h3>
              <p class="mb-0">Interact with players and attendees in a fun dynamic environment.</p>
            </SponsorIconBlockComponent>
            <SponsorIconBlockComponent icon="bi bi-check" class="mt-3">
              <h3 class="fw-bold text-dark mb-1" style="font-size: 1rem">Make a meaningful impact</h3>
              <p class="mb-0">
                This isn't just about sports—it's about giving back. Sponsorship directly supports
                <a href="https://hospicesimcoe.ca">Hospice Simcoe</a>, a vital organization providing compassionate end-of-life care to our community.
              </p>
            </SponsorIconBlockComponent>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss"></style>
