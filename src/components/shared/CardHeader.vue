<template>
    <div class="p-6">
        <div class="flex gap-4 items-center">
            <div
                class="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                :class="[colorClass]"
            >
                <v-icon size="20">{{ icon }}</v-icon>
            </div>
            <div>
                <h1 class="text-white font-bold text-xl">{{ title }}</h1>
                <p class="text-gray-400 text-sm pt-1">{{ subtitle }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    title: string
    subtitle: string
    icon: string | object
    colorClass:string
}>()

const iconBgClass = computed(() => `bg-${props.iconColor}/20`);
const iconTextClass = computed(() => `text-${props.iconColor}`);
</script>
