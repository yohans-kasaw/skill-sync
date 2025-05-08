<template>
    <div class="flex flex-col gap-5 justify-center items-center">
        <div class="w-3/4 lg:w-2/4">
            <ResumeJsonCard></ResumeJsonCard>
        </div>
        <div class="w-3/4 lg:w-2/4">
            <AdditionalInfoCard></AdditionalInfoCard>
        </div>
        <div class="w-3/4 lg:w-2/4">
            <BasePromptCard></BasePromptCard>
        </div>
    </div>
</template>

<script lang="ts">
import ResumeJsonCard from '../components/ResumeJsonCard.vue'
import AdditionalInfoCard from '../components/AdditionalInfoCard.vue'
import BasePromptCard from '../components/BasePromptCard.vue'
export default {
    name: 'BaseInfo',
    components: {
        ResumeJsonCard,
        AdditionalInfoCard,
        BasePromptCard
    }
}
</script>

<style scoped lang="sass"></style>
