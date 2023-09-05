<template>
    <div class="px-[25px] py-[20px] bg-white flex flex-col gap-2 rounded-zeel-rounded-lg cursor-pointer">
       <h3 class="text-zeel-dark-200 text-zeel-text-extra-small font-zeel-regular font-semibold">{{title}}</h3>
       <div class="flex items-center justify-between">
        <h1 class=" text-zeel-dark-600 font-zeel-regular font-semibold text-zeel-text-extra-meduim">{{ currency}}{{value}}</h1>
        <img src="../../assets/graphwave.svg"  alt="wave"/>
       </div>
       <div class="flex items-center gap-1" v-if="hasBalance">
        <span class="material-symbols-outlined text-zeel-green-400 text-zeel-text-meduim ">
account_balance_wallet
</span>
            <span class="text-zeel-dark-100 text-zeel-text-extra-small inline-block font-zeel-regular font-medium">Balance {{currency}}{{ balance }}</span>
            <span class="material-symbols-outlined text-zeel-text-extra-small text-zeel-dark-100 ">
open_in_new
</span>
        </div>

        <div v-else class="mt-2"></div>
    </div>
</template>

<script setup lang="ts">
  interface IGrapCard {
    title: string,
    value: string | number,
    hasBalance?: boolean,
    balance?: number,
    currency?: string,
    balanceLink?: 'string', 
  }
  const props = defineProps<IGrapCard>();
</script>

<style scoped>

</style>