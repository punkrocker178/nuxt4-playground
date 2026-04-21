<template>
  <v-card>
    <v-card-title class="font-weight-bold">
      {{ props.symbol }}
    </v-card-title>
    <v-card-text class="d-flex">
      <div>
        <span class="text-body-1">{{ props.price }}</span>
        <div :class="props.change >= 0 ? 'text-green' : 'text-red'">
          <v-icon :icon="props.change >= 0 ? 'mdi-menu-up' : 'mdi-menu-down'"></v-icon>
          <span>{{ props.change.toFixed(2) }}</span>
        </div>
      </div>
      <div class="ml-auto">
        <v-btn elevation="0" @click="$emit('delete', props.symbol)">
          <v-icon icon="mdi-delete"></v-icon>
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { DisplayStock } from '~/models/displayStock';

const props = defineProps<DisplayStock>();
defineEmits<{
  delete: [symbol: string]
}>();
</script>