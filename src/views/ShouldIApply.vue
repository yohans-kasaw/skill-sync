<template>
    <div class="h-screen">
        <CardHeader
            title="am header"
            subtitle="am subtitel"
            icon="mdi-chat-outline"
            iconColor="green-400"
        />
        {{ $route.fullPath }}
    </div>
</template>

<script lang="ts">
import InfoBox from '@/components/shared/InfoBox.vue'
import CardHeader from '@/components/shared/CardHeader.vue'
export default {
    name: 'ShouldIApply',
    components: {
        InfoBox,
        CardHeader
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
