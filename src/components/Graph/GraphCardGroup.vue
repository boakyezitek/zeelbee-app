<template>
    <div class="grid grid-cols-4 gap-4">
        
  <GraphCard
    title="Revenue"
    :value="25000"
    :has-balance="true"
    :balance="199"
    currency="$"
  />

  <GraphCard
    title="Purchases"
    :value="34"
  />

  <GraphCard
    title="Visits"
    :value="100"
  />

  <GraphCard
    title="Conversions"
    :value="45"
  />
        
    </div>
</template>

<script setup lang="ts">
import GraphCard from './GraphCard.vue'
</script>

<style scoped>

</style>