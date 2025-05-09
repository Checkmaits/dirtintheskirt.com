<script setup>
import { ref } from "vue";

const mobileNavToggled = ref(false);

function toggleMobileNav() {
  mobileNavToggled.value = !mobileNavToggled.value;
}
</script>

<template>
  <header class="header">
    <div class="container-fluid container-lg py-3">
      <div class="d-flex align-items-center justify-content-between">
        <router-link :to="{ name: 'HomeView' }" class="header-logo">
          <img src="../assets/images/dits-logo.png" alt="Dirt in the Skirt (2025) Logo" />
        </router-link>
        <div class="d-flex align-items-center gap-4">
          <nav class="header-nav d-none d-lg-flex">
            <router-link :to="{ name: 'HomeView' }">Home</router-link>
            <router-link :to="{ path: '/', hash: '#about-section' }">About</router-link>
            <router-link :to="{ path: '/', hash: '#herstory-section' }">"Herstory"</router-link>
            <router-link :to="{ path: '/', hash: '#sponsors-section' }">Sponsors</router-link>
            <router-link :to="{ path: '/', hash: '#contact-section' }">Contact</router-link>
            <a target="_blank" href="https://www.wsbn.tv/channel-29-slow-pitch-ball/">
              <span class="fw-bold text-primary-light" style="font-size: 0.9rem">Watch Live</span>
            </a>
          </nav>
          <router-link :to="{ name: 'SponsorView' }" class="btn btn-outline-primary-light ms-0 ms-lg-3"> SPONSOR </router-link>
          <button @click="toggleMobileNav" class="mobile-nav-toggler d-flex d-lg-none">
            <i class="bi bi-list"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="mobile-nav" :class="{ active: mobileNavToggled }">
      <div class="mobile-nav-header">
        <div class="d-flex align-items-center justify-content-between w-100">
          <router-link @click="toggleMobileNav" :to="{ name: 'HomeView' }" class="mobile-nav-logo">
            <img src="../assets/images/dits-logo.png" alt="Dirt in the Skirt (2025) Logo" />
          </router-link>
          <button @click="toggleMobileNav" class="mobile-nav-toggler d-flex d-lg-none">
            <i class="bi bi-list"></i>
          </button>
        </div>
      </div>
      <nav class="mobile-nav-list w-100">
        <router-link @click="toggleMobileNav" :to="{ name: 'HomeView' }">Home</router-link>
        <router-link @click="toggleMobileNav" :to="{ path: '/', hash: '#about-section' }">About</router-link>
        <router-link @click="toggleMobileNav" :to="{ path: '/', hash: '#herstory-section' }">"Herstory"</router-link>
        <router-link @click="toggleMobileNav" :to="{ path: '/', hash: '#sponsors-section' }">Sponsors</router-link>
        <router-link @click="toggleMobileNav" :to="{ path: '/', hash: '#contact-section' }">Contact</router-link>
        <a @click="toggleMobileNav" target="_blank" href="https://www.wsbn.tv/channel-29-slow-pitch-ball/">
          <span class="fw-bold">Watch Live</span>
        </a>
      </nav>
      <div class="mobile-nav-footer">
        <p class="mb-0">&copy; Silver Compass Consulting, 2025</p>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/styles/colors" as c;

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &-logo img {
    width: auto;
    height: 70px;
  }

  &-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    a {
      font-size: 0.95rem;
      font-weight: 500;
      text-decoration: none;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.7);
      transition: color 0.3s ease;

      &:hover {
        color: white;
      }
    }
  }
}

.mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background-color: c.$headings;
  transition:
    right 0.3s ease,
    width 0.3s ease;

  &.active {
    right: 0;
  }

  @media (min-width: 992px) {
    &.active {
      right: -100%;
    }
  }

  @media (max-width: 992px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  &-logo img {
    width: auto;
    height: 70px;
  }

  &-header,
  &-list,
  &-footer {
    width: 100%;
  }

  &-header {
    border-bottom: 1px solid rgba(white, 0.1);
    padding-bottom: 1rem;
  }

  &-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 2rem;

    a:not(.btn) {
      color: rgba(white, 0.7);
      font-weight: 500;
      font-size: 2rem;
      text-decoration: none;
      text-transform: uppercase;
      transition: color 0.3s ease;

      &:hover {
        color: white;
      }
    }
  }

  &-footer {
    border-top: 1px solid rgba(white, 0.1);
    padding-top: 1rem;
    text-align: center;

    p {
      color: rgba(white, 0.7);
    }
  }

  &-toggler {
    width: 45px;
    height: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    &:active {
      background-color: rgba(255, 255, 255, 0.2);
    }

    i {
      color: #fff;
      font-size: 30px;
    }
  }
}
</style>
