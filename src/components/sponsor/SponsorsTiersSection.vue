<script setup>
import SponsorTierBlockComponent from "./SponsorTierBlockComponent.vue";
</script>

<template>
  <section id="sponsor-tiers-section">
    <div class="container-fluid container-lg">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <h2 class="section-title">Sponsorships</h2>
        <div class="row align-items-start w-100 gx-4" style="margin-top: 4rem">
          <div class="col-12 col-md-6">
            <SponsorTierBlockComponent icon="bi bi-gem" link="https://forms.gle/ZDQuFeczpngkctiF6" link-text="Sponsorship Form">
              <h3 class="mt-5" style="font-size: 20px">Event Sponsorship</h3>
              <p class="mb-0">
                Support our event and gain exposure through website features, social media shoutouts, and prominent signage at the event. Your
                sponsorship helps make it all possible while boosting your brand visibility!
              </p>
            </SponsorTierBlockComponent>
          </div>
          <div class="col-12 col-md-6 mt-5 mt-md-0">
            <SponsorTierBlockComponent icon="bi bi-people" link="#" link-text="Sponsor-A-Team Form" style="opacity: 0.5">
              <div class="badge bg-danger sold-out-badge">No teams available</div>
              <h3 class="mt-5" style="font-size: 20px">Sponsor-A-Team</h3>
              <p class="mb-0">
                Sponsor a team and get your logo featured on game day, our website, and social media, plus a thank-you package with event highlights.
                Team up with another sponsor for full benefits and increased visibility!
              </p>
            </SponsorTierBlockComponent>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sold-out-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  transform: rotate(-10deg) scale(1.5);
}
</style>
