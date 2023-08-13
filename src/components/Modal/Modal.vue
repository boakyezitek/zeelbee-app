<template>
    <Teleport to="body">
        <div v-if="showModal" class="fixed left-0 top-0 right-0 bottom-0 bg-zeel-gray-100 flex items-center justify-center p-5 z-50">
            <div class="h-[450px] max-h-[750px] animate-fade-in-up" :style="styles">
                <Card v-bind="{}">
                <template #body>
                    <div class="flex flex-col items-start h-full">
                        <div class="flex items-center justify-between w-full">
                            <h1 class="capitalize text-zeel-text-meduim font-zeel-regular font-semibold text-zeel-dark-500">{{ title }}</h1>
                            <span class="material-symbols-outlined cursor-pointer text-zeel-gray-50 hover:text-zeel-danger" @click="$emit('hide')">
close
</span>
                        </div>

                        <div class="flex-1 overflow-x-hidden overflow-y-auto pt-8">
                            Hello this is modal
                        </div>
                    </div>
                </template>
              </Card>
            </div>
           
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Card from '../Card/Card.vue'

defineEmits<{
    (e: 'hide'): void
}>();

const props = withDefaults(defineProps<{
    type: 'small' | 'meduim' | 'large' | number, 
    title: string,
    isModalShow?: boolean,
}>(), {
    type: 'meduim',
    title: 'Withdrawal Form',
    isModalShow: false,
})

const styles = computed(() => ({
    width: props.type === 'small' ? '350px' : props.type === 'meduim' ? '650px' : props.type === 'large' ? '1050px' : `${props.type}px` 
}))


const showModal = ref(props.isModalShow);

watch(() => props.isModalShow, (newValue) => {
  showModal.value = newValue;
});
</script>

<style scoped></style>