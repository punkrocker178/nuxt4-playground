<template>
  <v-app>
    <nav-bar />
    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import { VApp } from 'vuetify/components';
import NavBar from '~/components/navigation/NavBar.vue';
import type { Company } from './models/companies';

onMounted(async () => {
  const companies = useState<Company[]>('companies', () => []);
  await callOnce(async () => {
    companies.value = await $fetch('/api/config/vnCompanies');
  });
});
</script>
