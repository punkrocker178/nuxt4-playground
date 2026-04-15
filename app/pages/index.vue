<template>
  <div>
    <nuxt-link to="/feature-comparison">
      Feature Comparison
    </nuxt-link>

    <nuxt-link to="/login">
      Login
    </nuxt-link>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title>Stock Market Updates</v-expansion-panel-title>
        <v-expansion-panel-text>
          <StockDashboard />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script setup lang="ts">
onMounted(async () => {
  console.log('Index page mounted');

});
</script>