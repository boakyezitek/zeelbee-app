<template>
  
  <div class=" h-[80px]  bg-zeel-primary  p-6 rounded-zeel-rounded-lg" :style="styles"><span class=" text-zeel-text-small  font-zeel-regular  text-white" :style="myColor" >{{  title }}</span></div>
    
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
  background: props.type ===  "Primary" ? "#f3f6ff" : props.type === "Secondry" ? "#E1E4EA"  : props.type === "Warning" ? "#Fdf4f4" : props.type === "Danger" ? "#fdf4f4" : `${props.type}`,
  border: props.type === "Primary" ? " 1px solid" : props.type === "Secondry" ? " 1px solid" : props.type === "Warning" ? " 1px solid" : props.type === "Danger" ? " 1px solid" : `${props.type}`,
  borderColor: props.type === "Primary" ? "#3366ff" :  props.type === "Warning"  ? "#ffb020"  :   props.type === "Danger" ? "red" :`${props.type}`,
}))


const myColor = computed(() => ({
  color: props.type === "Primary" ? '#3366ff' :  props.type === "Warning" ? '#b99759' :   props.type === "Danger" ? "red" : `${props.type}`

}))

</script>

<style scoped>

</style> 