<template>
    <div class="w-full bg-gray-800 shadow-lg rounded-lg border border-gray-700">
        <CardHeader
            title="Additional Information"
            subtitle="Provide any additional context or notes about your application"
            icon="mdi-account-outline"
            colorClass="bg-purple-500/20 text-purple-400"
        />

        <div class="px-6 bg-gray-800 pb-6 space-y-6">
            <InfoBox
                title="Tips for additional information?"
                :bulb="true"
                :items="tipsForInfo"
            ></InfoBox>

            <div class="space-y-2">
                <label
                    for="additionalInformation"
                    class="block text-sm font-medium text-gray-300 mb-1"
                >
                    Share any additional information that might be relevant to
                    your application...
                </label>
                <textarea
                    id="additionalInformation"
                    v-model="additionalInfoText"
                    rows="8"
                    class="w-full p-3 bg-gray-900 border border-gray-600 hover:border-gray-500 focus:border-blue-500 rounded-lg text-gray-300 placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500 resize-y"
                    placeholder="Enter your notes here..."
                ></textarea>
                <div class="text-right text-xs text-gray-500">
                    {{ characterCount }} characters
                </div>
            </div>

            <InfoBox
                title="What to include here:"
                :bulb="false"
                :items="whatToInclude"
            ></InfoBox>
        </div>
        <CardFooter firstBtnText="Back to Resume" secondBtnText="Continue"></CardFooter>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import InfoBox from '@/components/shared/InfoBox.vue'
import CardHeader from '@/components/shared/CardHeader.vue'
import CardFooter from '@/components/shared/CardFooter.vue'

export default defineComponent({
    name: 'AdditionalInformationCard',

    components: {
        InfoBox,
        CardHeader,
        CardFooter,
    },

    setup() {
        const additionalInfoText = ref('')

        const tipsForInfo = ref([
            'Highlight achievements not visible in your structured resume',
            'Mention specific interests in the company or role',
            'Keep it concise but informative',
        ])

        const whatToInclude = ref([
            'Specific interest in the role or company',
            'Relevant achievements not covered in your resume',
            'Explanation of any gaps in employment',
            'Links to portfolios, projects, or social media profiles',
        ])

        const characterCount = computed(() => {
            return additionalInfoText.value.length
        })

        return {
            additionalInfoText,
            tipsForInfo,
            whatToInclude,
            characterCount,
        }
    },
})
</script>

<style scoped></style>
