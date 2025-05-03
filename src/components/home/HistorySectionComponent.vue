<script setup></script>

<template>
  <section id="herstory-section" class="herstory-section">
    <div class="herstory-section-inner">
      <div class="d-flex flex-column align-items-center justify-content-center py-5 w-100 h-100">
        <div class="herstory-section-inner-wrapper text-center">
          <h2 class="text-white"><span class="text-primary-light">"Herstory"</span> of Dirt in the Skirt</h2>
          <p class="text-white mt-5">
            Dirt in the Skirt started with a simple idea:
            <em class="text-primary-light">bring women together through sport, community, and a touch of vintage flair.</em> What began as a small
            slo-pitch tournament concept quickly turned into something far bigger - thanks to the incredible women, sponsors, and everyone who showed
            up, stepped up, and made it happen!
          </p>
          <p class="text-white">
            On July 22, 2024, a call went out for a fun, retro-inspired all-women's tournament. The goal? Four teams, good vibes, custom uniforms, and
            a day of connection on and off the field. But the response was overwhelming - four teams filled up in 10 minutes, then eight, then twelve,
            with a waitlist forming within 24 hours.
          </p>
          <p class="text-white">
            With less than three months to plan, a powerhouse crew of local women - many of whom met playing in Barrie leagues - rallied together to
            bring the vision to life. What followed was nothing short of magic.
          </p>
          <p class="text-white">
            The inaugural DITS featured:
            <em class="text-primary-light">
              12 teams rocking custom AAGPBL-inspired uniforms, over 150 players and spectators, a full-day of ball games, DJ, walk-up songs, vendors,
              family fun, a hilarious (and crowd-favourite) “Dottie's Hotties” exhibition game featuring men in skirts, and a lot of heart behind the
              scenes
            </em>
            - volunteers, sponsors, and community support pulling it all together!
          </p>
          <p class="text-white mb-0">
            Even with a very last-minute uniform delivery, everything came together beautifully. Most importantly, the tournament raised $2,300 for
            Simcoe County CMHA.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../../assets/styles/colors" as c;

.herstory-section {
  position: relative;
  width: 100%;
  height: 650px;
  background-image: url("../../assets/images/dits-history-image.jpg");
  background-size: cover;
  background-position: center 40%;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (max-width: 1400px) {
    height: 750px;
  }

  @media (max-width: 992px) {
    height: 850px;
  }

  @media (max-width: 768px) {
    height: 1200px;
  }

  &-inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(c.$headings, 0.9);

    &-wrapper {
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
  }
}
</style>
