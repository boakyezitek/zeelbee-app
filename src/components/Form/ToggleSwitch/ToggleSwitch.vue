<template>
  
   <input type="checkbox" id="toggle"
   :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    />
   <label for="toggle"></label>
   
</template>

<script setup lang="ts">
defineProps(['modelValue'])

const emit = defineEmits<{
  (e: 'update:modelValue', value?: string | number | null): void
}>()
</script>

<style scoped>
#toggle {
  display: none;
}

label {
  display: inline-block;;
  width: 54px;
  height: 24px;
  background-color: #ccc;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
 
}

label::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
}

#toggle:checked + label {
  background-color: #008F5F;
}
#toggle:checked + label::before {
  transform: translateX(29px);
}
</style>