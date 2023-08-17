<template>
  
  <div class=" h-[80px]  bg-zeel-primary  p-6 rounded-zeel-rounded-lg" :style="styles"><span class=" text-zeel-text-small  font-zeel-regular  text-white"  :style="styles">{{  title }}</span></div>
    
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = withDefaults(
    defineProps<{
       type: "Primary"  | "Secondry" |"Warning" | "Danger",
       title: string
    }>(),
    {
        type: "Primary",
        title: "Primary"
    }
)


const styles = computed(() => ({
  background: props.type ===  "Primary" ? "#2D9CDB" : props.type === "Secondry" ? "#E1E4EA"  : props.type === "Warning" ? "#FFBE0A" : props.type === "Danger" ? "#FC5C65" : `${props.type}`,
  color: props.type === "Secondry" ? '#000' : `${props.type}`
}))

</script>

<style scoped>

</style> 