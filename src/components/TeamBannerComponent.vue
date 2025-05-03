<script setup>
const imageFiles = import.meta.glob("../assets/images/team-images/*.png", { eager: true, import: "default" });
const teams = Object.entries(imageFiles).map(([path, src]) => {
  const fileName = path.split("/").pop();
  const name = fileName.replace("dits-", "").replace(".png", "").replace(/-/g, " ");
  return {
    src,
    alt: `DITS ${name.charAt(0).toUpperCase() + name.slice(1)} Team Image`,
  };
});
</script>

<template>
  <div class="team-banner-wrapper">
    <div class="team-banner">
      <div class="team-banner-track">
        <img v-for="(team, index) in teams" :key="index" :src="team.src" :alt="team.alt" />
        <img v-for="(team, index) in teams" :key="'clone-' + index" :src="team.src" :alt="team.alt" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/styles/colors" as c;

.team-banner-wrapper {
  overflow: hidden;
  background-color: c.$light;
  padding: 1rem 0;
}

.team-banner {
  display: flex;
  width: 100%;
}

.team-banner-track {
  display: flex;
  animation: scrollLeft 50s linear infinite;
  width: max-content;
}

img {
  width: 75px;
  height: 75px;
  margin-right: 1.5rem;
  opacity: 0.2;
  filter: grayscale(1);
  transition:
    opacity 0.3s ease,
    filter 0.3s ease;

  &:hover {
    opacity: 1;
    filter: grayscale(0);
  }
}

@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
