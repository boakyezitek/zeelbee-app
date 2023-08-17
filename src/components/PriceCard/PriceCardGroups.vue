<template>
  <div class="mb-[45px]">
    <div>
      <h1
        class="text-zeel-text-large font-zeel-regular text-zeel-dark-600 font-[600] mb-[15px]"
      >
        Subscription
      </h1>
      <p class="text-zeel- text-zeel-text-small font-[500] text-[#7384A5]">
        Purchase a Pro or Business subscription to unlock premium and unique
        features to improve your experience
      </p>
    </div>
    <div class="mt-[45px]">
      <div class="grid grid-cols-3 gap-[2em]">
        <div>
          <PriceCard />
        </div>
        <div>
          <PriceCard  type="Pro" numbers="€29.99" :show-button="true" />
        </div>
        <div>
          <PriceCard type="Bussiness" numbers="€199.99" :show-button="true"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PriceCard from "./PriceCard.vue";
</script>

<style scoped></style>
