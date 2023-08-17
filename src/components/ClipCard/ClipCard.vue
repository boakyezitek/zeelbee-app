<template>
    <div class=" w-[100%]  flex flex-col  shadow-xl shadow-zeel-shadow-500 " :style="styles">
       <div class=" h-[39px] bg-[#008F5F]  rounded-t-[10px] py-[7px] px-[20px] flex items-center justify-between">
        <h1 class=" font-[500] text-[12px] font-zeel-regular tracking-[0.12px] text-zeel-clip-700 uppercase">Api Root URL</h1>
      <span class="material-symbols-outlined cursor-pointer text-[#4CB18F]">content_copy</span>
       </div>
       <div class=" h-[118px] bg-white rounded-b-[10px]  overflow-hidden overflow-y-auto flex items-center px-[20px]">
         <h1 class=" text-[12px] font-[500] text-[#3C475D]">https://dev.sellix.io/v1</h1>
       </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = withDefaults(
    defineProps<{
      ClipWidth: string
    }>(),{
      
    })

const styles = computed(() => ({
    width: props.ClipWidth === "" ? "100%" : `${ props.ClipWidth}`
}))
     
</script>

<style scoped>

</style>