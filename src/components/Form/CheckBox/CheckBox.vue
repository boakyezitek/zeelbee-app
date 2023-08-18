<template>

    <div class="round">
    <input type="checkbox" checked id="checkbox" 
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    />
    <label for="checkbox"></label>
  </div>
</template>

<script setup lang="ts">
defineProps(['modelValue'])

const emit = defineEmits<{
  (e: 'update:modelValue', value?: string | number | null): void
}>()

</script>


<style>
.round {
  position: relative;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  left: 0;
  position: absolute;
  top: 0;
  width: 20px;
}

.round label:after {
  border: 2.5px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 3px;
  opacity: 0;
  position: absolute;
  top: 4px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: #66bb6a;
  border-color: #66bb6a;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}


</style>