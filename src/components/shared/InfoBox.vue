<template>
    <div class="bg-[#292B3A] border border-[#383B4C] rounded-lg p-4">
        <div class="flex gap-3 items-start">
            <div v-if="iconName" class="text-yellow-500 pt-0.5 shrink-0">
                <v-icon size="20">{{ iconName }}</v-icon>
            </div>
            <div class="flex flex-col">
                <h3 v-if="title" class="text-white font-semibold text-sm mb-1">
                    {{ title }}
                </h3>
                <slot></slot>
                <!-- For list items or custom paragraph -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'InfoBox',
    props: {
        title: { type: String, default: '' },
        iconName: { type: String, default: 'mdi-lightbulb-outline' } // Default icon
    }
})
</script>
