<template>
    <div 
        class="snap-parent-container h-screen overflow-y-scroll"
    >
        <div
            v-for="(section, index) in sections"
            :key="index"
            class="snap-section h-screen flex justify-center items-center"
        >
            <div class="w-3/4 lg:w-2/4">
                <component :is="section.component"></component>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import ResumeJsonCard from '@/components/cards/ResumeJsonCard.vue'
import AdditionalInfoCard from '@/components/cards/AdditionalInfoCard.vue'
import BasePromptCard from '@/components/cards/BasePromptCard.vue'

export default {
    name: 'BaseInfo',
    components: {
        ResumeJsonCard,
        AdditionalInfoCard,
        BasePromptCard
    },
    data() {
        return {
            sections: [
                { component: 'ResumeJsonCard' },
                { component: 'AdditionalInfoCard' },
                { component: 'BasePromptCard' }
            ],
        }
    },
}
</script>

<style scoped lang="css">
.snap-parent-container {
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
}

.snap-section {
    scroll-snap-align: center;
    scroll-snap-stop: always;
}
</style>
