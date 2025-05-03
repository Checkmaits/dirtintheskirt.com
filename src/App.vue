<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import TeamBannerComponent from "./components/TeamBannerComponent.vue";
</script>

<template>
  <HeaderComponent />
  <main class="main">
    <router-view />
  </main>
  <TeamBannerComponent />
  <footer class="footer bg-dark">
    <div class="container text-center py-2">
      <p class="text-light mb-0">
        &copy; Silver Compass Consulting, 2025. All rights reserved.
        <em>Built and hosted by <a href="https://bawebdesign.ca" class="text-primary-light">BA Web Design.</a></em>
      </p>
    </div>
  </footer>
</template>

<style scoped></style>
