<template>
    <div>
        <button class="px-[30px] py-[14px]  rounded-zeel-rounded font-zeel-default flex items-center gap-3" :class="classes" :style="styles">
            <span class="material-symbols-outlined" v-if="hasIcon && iconPostion === 'left'">
            {{ icon }}
           </span>       
            {{label}}
            <span class="material-symbols-outlined" v-if="hasIcon && iconPostion === 'right'">
            {{ icon }}
           </span>
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { IButton } from './interface';
const props = withDefaults(defineProps<IButton>(), {
    background: 'bg-zeel-primary',
})

const classes = computed(() => {
    return [props.background, props.color]
})

const styles = computed(() => ({
    color: props.color
}))

</script>

<style scoped>

</style>