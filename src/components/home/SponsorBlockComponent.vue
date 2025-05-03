<script setup>
defineProps({
  brand: {
    type: String,
    required: true,
  },
  brandImg: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  teamImg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="dits-sponsor">
    <div class="dits-sponsor-inner">
      <img :src="brandImg" :alt="`${brand} Logo Image`" class="dits-sponsor-brand" />
      <img :src="teamImg" :alt="`${team} Logo Image`" class="dits-sponsor-team" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dits-sponsor {
  width: 200px;
  height: 75px;

  &:hover {
    .dits-sponsor-brand,
    .dits-sponsor-team {
      filter: grayscale(0);
    }
  }

  &-inner {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &-brand {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 60px;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }

  &-team {
    position: absolute;
    right: 0;
    bottom: 0;
    width: auto;
    height: 40px;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }
}
</style>
