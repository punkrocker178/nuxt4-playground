<template>
  <div class="login-page">
    <LoginForm @login="handleLogin" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ ssr: false });

function handleLogin(email: string, password: string) {
  console.log('Login attempt:', email, password);
  // nuxt link to index page after login
  navigateTo('/'); 
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
