<template>
  <div>
    <v-app-bar>
      <v-app-bar-title>My App</v-app-bar-title>
    </v-app-bar>

    <div class="app-bar-offset"></div>

    <h1>Hello, Steve</h1>
    <p>Let's learn Nuxt</p>

    <div class="cards-container">
      <SimpleCard v-for="card in cards" :key="card.id" class="mr-1">
        <template #header>
          <div class="card-header">
            {{ card.title }}
          </div>
        </template>
        <template #content>
          <div class="card-content">
            <div class="card-content__description">
              {{ card.description }}
            </div>
            <div class="card-content__bullet-items">
              <ul>
                <li v-for="item in card.items" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div class="card-content__pricing">
              Price: {{ card.price }}
            </div>
            <div class="card-content__cta">
              <VBtn color="primary" class="w-100">{{ card.cta }}</VBtn>
            </div>
          </div>
        </template>
      </SimpleCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VAppBar, VAppBarTitle, VBtn } from 'vuetify/components';

const cards = ref([
  {
    id: 1,
    title: 'Card 1',
    description: 'Text description. 3 sentence paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Yes Long text lorem ipsum.',
    items: ['Item 1', 'Item 2', 'Item 3'],
    price: '100$',
    cta: 'Buy',
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'Another card description. Pellentesque habitant morbi tristique senectus et netus et malesuada. Very long text hahahahaa',
    items: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
    price: '200$',
    cta: 'Order',
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'Third card with a different description. Etiam porta sem malesuada magna mollis euismod.',
    items: ['Benefit X', 'Benefit Y', 'Benefit Z'],
    price: '300$',
    cta: 'Subscribe',
  },
]);
</script>

<style lang="postcss" scoped>
.app-bar-offset {
  height: 64px;
}
</style>