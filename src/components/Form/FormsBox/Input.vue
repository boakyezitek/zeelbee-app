<template>
<div>
  <input class="   h-[50px] focus:outline-none  border-2 border-solid border-[#C4CAD6] rounded-[8px]  w-full px-[25px]"  :type="type" placeholder=""
  :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
</div>
</template>

<script setup lang="ts">
import { IFormInputProps } from './index'

const props = defineProps<IFormInputProps>();

const emit = defineEmits<{
  (e: 'update:modelValue', value?: string | number | null): void
}>();




</script>

<style scoped>




</style>