<template>
    <div class="h-screen flex justify-center items-center">
        <ResumeJsonCard></ResumeJsonCard>
    </div>
</template>

<script lang="ts">
import ResumeJsonCard from '../components/ResumeJsonCard.vue'
export default {
    name: 'BaseInfo',
    components: {
        ResumeJsonCard
    }
}
</script>

<style scoped lang="sass"></style>
