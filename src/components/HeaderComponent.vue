<script setup></script>

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
            <a aria-current="page" href="https://www.wsbn.tv/channel-29-slow-pitch-ball/">Watch Live</a>
          </nav>
          <router-link :to="{ name: 'SponsorView' }" class="btn btn-outline-primary-light d-none d-md-block ms-3"> SPONSOR </router-link>
          <button class="mobile-nav-toggler d-flex d-lg-none">
            <i class="bi bi-list"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
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

.mobile-nav-toggler {
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
</style>
