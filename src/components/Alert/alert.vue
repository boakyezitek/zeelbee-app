<template>
  
  <div class=" h-[80px]  bg-zeel-primary  p-6 rounded-zeel-rounded-lg" :style="styles"><span class=" text-zeel-text-small  font-zeel-regular  text-white" :style="myColor" >{{  title }}</span></div>
    
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = withDefaults(
    defineProps<{
       type: "primary"  | "secondry" |"warning" | "danger" | "success",
       title: string
    }>(),
    {
        type: "primary",
        title: "primary"
    }
)


const styles = computed(() => ({
  background: props.type ===  "primary" ? "#f3f6ff" : props.type === "secondry" ? "#F3F4F7"  : props.type === "warning" ? "#Fdf4f4" : props.type === "danger" ? "#fdf4f4" : props.type === "success" ? "#f1f7f5" : `${props.type}`,
  border: props.type === "primary" ? " 1px solid" : props.type === "secondry" ? " 1px solid" : props.type === "warning" ? " 1px solid" : props.type === "danger" ? " 1px solid" : props.type === "success" ? "1px solid" : `${props.type}`,
  borderColor: props.type === "primary" ? "#3366ff" :  props.type === "warning"  ? "#ffb020"  :   props.type === "danger" ? "red" :  props.type === "secondry" ? "#C4CAD6"  : props.type === "success" ? "#5bbc99" : `${props.type}`,
}))


const myColor = computed(() => ({
  color: props.type === "primary" ? '#3366ff' :  props.type === "warning" ? '#b99759' :   props.type === "danger" ? "red" :  props.type === "secondry" ? "#C3C9D5" : props.type === "success" ? "#38745f" : `${props.type}`

}))

</script>

<style scoped>

</style> 