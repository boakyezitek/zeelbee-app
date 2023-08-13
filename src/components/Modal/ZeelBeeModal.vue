<template>
    <modal type="meduim" @hide="hide" :is-modal-show="showModal" title="Show Modal Infomation"></modal>
    <Button
    color="#ffffff"
    label="Show Modal"
    background="bg-zeel-green-400"
    @click="show"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Modal from './Modal.vue';
import Button from '../Button/Button.vue'
const showModal = ref<boolean>(false)

const hide = () => {
    showModal.value = false
}

const show = () => {
    showModal.value = true
}
</script>

<style scoped>

</style>