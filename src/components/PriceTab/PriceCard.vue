<template>
  <div class="w-[333px] min-h-[660px] bg-zeel-orange-400 shadow-xl shadow-slate-200 flex flex-col rounded-zeel-rounded-lg">
    <div class="h-[33%] px-9 py-6 flex items-center flex-col">
      <h1 :style="styles" class="text-zeel-warning uppercase font-[500] font-zeel-default text-[20px] mb-3">
        {{ title }}
      </h1>
      <p class="text-center text-[12px] text-zeel-dark-400 mb-[20px]">
        For individuals and small teams trying out Sellix for an unlimited
        period
      </p>
      <h2 class="text-[30px] font-zeel-regular text-zeel-warning font-bold">
        {{ numbers }} <span class="text-[17px]">/mo</span>
      </h2>
    </div>
    <div class="px-10 py-6 bg-white rounded-b-zeel-rounded-lg rounded-t-zeel-rounded-lg">
      <div class="flex items-center gap-[2em] mb-[39px]" v-for="({ icon, text }, id) of items" :key="id">
        <div class="w-[24px] h-[24px] bg-zeel-green-300 rounded-full flex items-center justify-center">
          <span class="material-symbols-outlined text-white text-[18px] font-bold">{{ icon }}</span>
        </div>
        <h1 class="text-zeel-dark-500 font-zeel-regular text-[12px] font-medium">
          {{ text }}
        </h1>
      </div>
      <div class="flex items-center justify-center pt-[62px]" v-if="showButton">
        <Button  color="#ffffff" label="Get Started" background="bg-zeel-green-400" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Button from "../Button/Button.vue";

const props = withDefaults(
  defineProps<{
    type: "Free" | "Pro" | "Bussiness";
    showButton: Boolean,
    title: string;
    numbers: string;
    items: [{ id: number; icon: string; text: string }];
  }>(),
  {
    type: "Free",
    title: "Free",
    numbers: "€0",
    showButton:false,
    items: [
      { id: 1, icon: "done", text: "No setup and monthly fee" },
      { id: 2, icon: "done", text: "Secure dashboard access" },
      { id: 3, icon: "done", text: "Unlimited orders and products" },
      { id: 4, icon: "done", text: "Unlimited coupons" },
      { id: 5, icon: "done", text: "Unlimited queries" },
      { id: 6, icon: "done", text: "Standard Fraud Shield" },
      { id: 7, icon: "done", text: "Analytics dashboard" },
    ],
  }
);

const styles = computed(() => ({
color: props.type === 'Free' ? '#FFBE0A' : props.type === 'Pro' ?  '#008F5F'  :  props.type === 'Bussiness' ? '#FA8100' : `${props.type}`

}))


</script>

<style scoped></style>
