<script setup>
import HomeIconBlockComponent from "./HomeIconBlockComponent.vue";
import { ref } from "vue";

const messageName = ref("");
const messageEmail = ref("");
const messageSubject = ref("");
const messageContent = ref("");
const messageLoading = ref(false);
const messageError = ref(null);
const messageSuccess = ref(null);

async function handleSubmit() {
  messageLoading.value = true;
  messageError.value = null;
  messageSuccess.value = null;

  const response = await fetch("https://api.dirtintheskirt.com/api/v1/messages/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": import.meta.env.VITE_APP_API_KEY,
    },
    body: JSON.stringify({
      name: messageName.value,
      email: messageEmail.value,
      subject: messageSubject.value,
      message: messageContent.value,
    }),
  });

  if (response.ok) {
    messageSuccess.value = "Your message has been sent! We'll try to get back to you in 24 business hours.";
  } else {
    const responseData = await response.json();
    messageError.value = responseData.message;
  }

  messageLoading.value = false;
}
</script>

<template>
  <section id="contact-section">
    <div class="container-fluid container-lg">
      <div class="row align-items-start gx-5">
        <div class="col-12 col-md col-lg">
          <h2 class="section-title">Contact Us</h2>
          <p class="mt-5">
            Have a question, idea, or want to get involved with Dirt in the Skirt? Whether you're a
            <span class="fw-bold text-primary">player, sponsor, vendor, or fan</span>—we'd love to hear from you. Reach out and connect with our team.
            Together, we're building something unforgettable.
          </p>
          <div class="d-flex flex-column align-items-start gap-3 mt-4">
            <HomeIconBlockComponent icon="bi bi-geo-alt">
              <span class="fw-bold text-dark">Location</span>
              <span>2100 Nursery Rd, Minesing, ON L0L 1Y2</span>
            </HomeIconBlockComponent>
            <HomeIconBlockComponent icon="bi bi-facebook">
              <span class="fw-bold text-dark">Facebook</span>
              <span>@DirtInTheSkirtTournament</span>
            </HomeIconBlockComponent>
            <HomeIconBlockComponent icon="bi bi-envelope">
              <span class="fw-bold text-dark">Email</span>
              <span>hello@silvercoco.ca</span>
            </HomeIconBlockComponent>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-5 mt-5 mt-md-0">
          <h4>Send us a message</h4>
          <div v-if="messageLoading" class="spinner spinner-border text-primary"></div>
          <form v-else @submit.prevent="handleSubmit" class="mt-3">
            <div v-if="messageError" class="alert alert-danger">{{ messageError }}</div>
            <div v-else-if="messageSuccess" class="alert alert-success">{{ messageSuccess }}</div>
            <div class="row align-items-start">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label>Name <span class="text-danger">*</span></label>
                  <input v-model="messageName" type="text" class="form-control" placeholder="Enter your name (required)" required />
                </div>
              </div>
              <div class="col-12 col-md-6 mt-3 mt-md-0">
                <div class="form-group">
                  <label>Email <span class="text-danger">*</span></label>
                  <input v-model="messageEmail" type="email" class="form-control" placeholder="Enter your email (required)" required />
                </div>
              </div>
            </div>
            <div class="form-group mt-3">
              <label for="subject">Subject</label>
              <input v-model="messageSubject" type="text" class="form-control" placeholder="Enter the subject" />
            </div>
            <div class="form-group mt-3">
              <label for="message">Message <span class="text-danger">*</span></label>
              <textarea v-model="messageContent" class="form-control" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100 mt-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
