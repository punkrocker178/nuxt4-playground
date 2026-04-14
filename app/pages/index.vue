<template>
<div>
  <nuxt-link to="/feature-comparison">
    Feature Comparison
  </nuxt-link>
  <stock-dashboard></stock-dashboard>
</div>
</template>
<script setup lang="ts">
onMounted(async () => {
  console.log('Index page mounted');

});
</script>