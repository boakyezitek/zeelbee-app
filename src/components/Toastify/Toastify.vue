<template>
    <div v-if="showToast" class="fixed right-[10px] z-40 w-[425px] min-h-[78px] rounded-zeel-rounded-extra-lg border-2 flex gap-4 items-center px-[22px] py-[20px]"
        :class="cardClasses">
        <div class=" absolute right-[6px] top-[7px] cursor-pointer">
            <span class="material-symbols-outlined text-zeel-text-meduim">
                close
            </span>
        </div>
        <div class="w-[40px] h-[40px] rounded-full  flex items-center justify-center text-white" :class="iconClasses">
            <span class="material-symbols-outlined">
                {{type === 'info' ?  'info_i' : type === 'success' ? 'done' : type === 'warning' ? 'priority_high' : 'warning'}}
            </span>
        </div>
        <div>
            <h4 class=" font-zeel-regular font-semibold text-zeel-text-small text-zeel-dark-500 mb-[5px]"> {{ title }} </h4>
            <p class="font-zeel-regular font-medium text-zeel-text-extra-small">{{ message }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
    type: 'success' | 'info' | 'warning' | 'danger',
    title: string,
    message?: string,
    showToast: boolean;
}>()


const cardClasses = computed(() => [
    props.type === 'info' ? 'border-zeel-info' : props.type === 'success' ? 'border-zeel-green-400' :
    props.type === 'warning'? 'border-zeel-warning' : 'border-zeel-danger', props.showToast ? 'animate-fade-in-right' : 'animate-fade-out-right'
])

const iconClasses = computed(() => [props.type === 'info' ? 'bg-zeel-info' : props.type === 'success' ? 'bg-zeel-green-400' :
props.type === 'warning'? 'bg-zeel-warning' : 'bg-zeel-danger'
])

// onUpdated(() => {
//     setTimeout(() => {
//       hideToastClass.value = 'animate-fade-out-right'
//     }, 800)
// })
// </script>

<style scoped></style>