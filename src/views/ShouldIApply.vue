<template>
    <div class="h-screen">
        <InfoBox
            title="Why JSON?"
            :bulb="true"
            :items="tipsForInfo"
        ></InfoBox>
        {{ $route.fullPath }}
    </div>
</template>

<script lang="ts">
import InfoBox from '@/components/shared/InfoBox.vue'
export default {
    name: 'ShouldIApply',
    components: {
        InfoBox
    },
    data() {
        return {
            tipsForInfo: [
                'Highlight achievements not visible in your structured resume',
                'Mention specific interests in the company or role',
                'Keep it concise but informative'
            ]
        }
    }
}
</script>

<style scoped lang="sass"></style>
