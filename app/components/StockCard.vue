<template>
  <v-card>
    <v-card-title>
      {{ props.symbol }}
    </v-card-title>
    <v-card-text>
      <div>
        Current Price: {{ props.price }}
        {{ props.change >= 0 ? '▲' : '▼' }} {{ props.change.toFixed(2) }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { DisplayStock } from '~/models/displayStock';

const props = defineProps<DisplayStock>();
</script>