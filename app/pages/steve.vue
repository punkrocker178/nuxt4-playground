<template>
<div>
<v-app-bar>
    <v-app-bar-title>My App</v-app-bar-title>
</v-app-bar>

<div class="app-bar-offset"></div>

<h1>Hello, Steve</h1>
<p>Let's learn Nuxt</p>
</div>
</template>

<script setup lang="ts">
import { VAppBar, VAppBarTitle } from 'vuetify/components';
</script>

<style lang="postcss" scoped>
.app-bar-offset {
  height: 64px;
}
</style>