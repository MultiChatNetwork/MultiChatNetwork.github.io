<template>
  <MainLayout>
    <header id="header" class="header">
      <div class="stars">
        <div class="animation stars-small" />
        <div class="animation stars-large" />
      </div>
      <h1 class="header-text">MultiChat</h1>
    </header>
    <main class="container px-4 py-2 my-4 py-md-5 my-md-2">
      <div class="card">
        <div class="card-body">
          <section class="announcement">
            <div class="announcement-header mb-3">
              <p class="announcement-date mb-2">Announced on July 7th, 2024.</p>
              <h3>MultiChat.network</h3>
            </div>
            <ul class="announcement-content-list mb-3">
              <li class="announcement-content-item">
                <span>MultiChat began in CEO-Founder | Software Engineer</span>
                <span
                  role="button"
                  class="fw-bold text-primary text-decoration-underline"
                  @click="handleRedirect()"
                >
                  @soulaimaneyahya
                </span>
              </li>
              <li class="announcement-content-item">
                Multichat is a messaging app with focus on security & user experience
              </li>
              <li class="announcement-content-item">
                Messages are end-to-end encrypted. No one outside of this chat, not even MultiChat, can read or listen to them.
              </li>
              <li class="announcement-content-item">
                Built-in layers of security give you the peace of mind to focus on connecting with family and friends.
              </li>
              <li class="announcement-content-item">
                We'll provide more informations and details over the upcoming
                weeks and months.
              </li>
            </ul>
            <div class="announcement-footer">
              <p class="appreciation-text">
                Thank you,<br />
                the MultiChat Team
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  </MainLayout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home Page",
  },
  methods: {
    handleRedirect() {
      return window.open("https://soulaimaneyahya.com/", "_blank");
    },
  },
};
</script>

<style scoped>
</style>
