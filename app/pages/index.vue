<template>
<div>
  <nuxt-link to="/feature-comparison">
    Go to Feature Comparison
  </nuxt-link>
</div>
</template>
<script setup lang="ts">
onMounted(() => {
  console.log('Index page mounted');
});
</script>