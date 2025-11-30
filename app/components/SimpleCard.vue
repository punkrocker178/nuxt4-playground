<template>
  <div class="card">
  <slot name="header">
  </slot>
  <slot name="content">
  </slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
/* Add minimal styling if needed */
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  background-color: #f9f9f9;

  display:flex;
  flex-direction: column;
}

.cards-container {
  display: flex;
  flex-direction: row;
}

.card-header {
  font-weight: bold;
  font-size: 1.5rem;
}

.card-content {
  font-size: 1rem;
  color: #333;
  display: flex;
  flex-direction: column;
  flex-grow:1;
}

.card-content__description {

}

.card-content__bullet-items {
  margin-left: 1.5rem;
}

.card-content__pricing {
  font-weight: bold;
  flex-grow: 1;
}

.card-content__cta {
  display: flex;
  align-items: flex-end;
}
</style>
