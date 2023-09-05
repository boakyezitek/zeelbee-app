<template>
   <div class=" relative ">
   <input class=" outline-none border-[1px] border-[#C4CAD6] h-[50px]  w-[100%] rounded-[8px] pl-2" 
   :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :type="isPasswordShow ? 'text' : 'password'"
   >
     <span @click="handdleshowButton"  class="material-symbols-outlined cursor-pointer  absolute  right-[20px] top-[0.80rem]">{{ isPasswordShow ? 'visibility_off' : 'visibility'   }}</span>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isPasswordShow = ref<boolean>(false)

const handdleshowButton = () => {
    isPasswordShow.value = !isPasswordShow.value
}

defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
}>();



</script>

<style scoped>

</style>