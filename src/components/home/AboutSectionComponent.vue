<script setup>
import SpacerComponent from "../SpacerComponent.vue";
import BulletListItemComponent from "./BulletListItemComponent.vue";
</script>

<template>
  <section id="about-section">
    <div class="container-fluid container-lg">
      <div class="row align-items-start align-items-xxl-center gx-5">
        <div class="col-12 col-md-6 col-lg-5">
          <img src="../../assets/images/dits-about-image.jpg" alt="Dirt in the Skirt (2025) About Image" class="img-fluid" />
        </div>
        <div class="col-12 col-md col-lg mt-5 mt-md-0">
          <h2 class="section-title">A day for the ladies</h2>
          <p class="mt-5">
            <span class="fw-bold text-primary">Dirt in the Skirt</span> is more than just a slo-pitch tournament—it's a full-day celebration of
            women's sports, community spirit, and giving back. Created and hosted by
            <span class="fw-bold text-primary">Silver Compass Consulting</span>, this unique charity event will bring together over
            <span class="fw-bold text-primary">300 women athletes,</span> local businesses, families, and fans for an unforgettable experience that
            blends competition, fun, and purpose.
          </p>
          <p>
            Held annually at the <span class="fw-bold text-primary">Barrie Sports Complex</span>, DITS is a ladies' slo-pitch tournament like no
            other. Featuring <span class="fw-bold text-primary">12 OG AAGPBL-inspired teams</span> and
            <span class="fw-bold text-primary">12 brand new Canadian city-themed teams,</span> each with their own customized vintage uniforms, the
            tournament is a vibrant tribute to the trailblazing women of baseball—while creating new memories and traditions for players today.
          </p>
          <div class="bg-light p-4 mt-4">
            <h4>Playing for a purpose</h4>
            <p class="mt-3 mb-0">
              DITS proudly raises funds for a local cause each year. In 2024, we donated $2,300 to
              <span class="fw-bold text-primary">Simcoe County CMHA</span>, and in 2025, we're honoured to support
              <a href="https://hospicesimcoe.ca/" target="_blank">Hospice Simcoe</a>—a vital organization providing compassionate end-of-life care and
              bereavement support in our community.
            </p>
          </div>
        </div>
      </div>
      <SpacerComponent />
      <div class="row align-items-start align-items-xxl-center gx-5">
        <div class="col-12 col-md col-lg mt-5 mt-md-0 order-2 order-lg-1">
          <h2 class="section-title">What to expect</h2>
          <p class="mt-5 mb-0">
            From the crack of the bat at <span class="fw-bold text-primary">8:00 AM</span> until the final celebration at 8:00 PM, DITS offers
            something for everyone:
          </p>
          <div class="d-flex flex-column align-items-start mt-2 gap-2">
            <BulletListItemComponent>
              <p class="mb-0">
                Non-stop slo-pitch action across 8 diamonds with 2 of those being main diamonds hosted by a DJ with music and walk up songs for all
                the ladies!
              </p>
            </BulletListItemComponent>
            <BulletListItemComponent>
              <p class="mb-0">A midday exhibition game featuring the infamous Dotties Hotties vs an All-Star women's team.</p>
            </BulletListItemComponent>
            <BulletListItemComponent>
              <p class="mb-0">Competitive side games & player challenges with prize money.</p>
            </BulletListItemComponent>
            <BulletListItemComponent>
              <p class="mb-0">A buzzing pavilion with food trucks, vendors, raffles, artist zone, and our VIP lounge.</p>
            </BulletListItemComponent>
            <BulletListItemComponent>
              <p class="mb-0">Photo booths, team photos, live DJ, and professional photography.</p>
            </BulletListItemComponent>
            <BulletListItemComponent>
              <p class="mb-0">Awards ceremony and an epic after party.</p>
            </BulletListItemComponent>
          </div>
          <p class="mt-3">
            Whether you're playing, cheering, sponsoring, or just soaking it all in, Dirt in the Skirt promises a one-of-a-kind atmosphere that blends
            nostalgia, empowerment, and celebration.
          </p>
        </div>
        <div class="col-12 col-md-6 col-lg-5 order-1 order-lg-2">
          <img src="../../assets/images/dits-about-image-2.jpg" alt="Dirt in the Skirt (2025) About Image 2" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
