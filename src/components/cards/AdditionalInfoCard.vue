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
                :items="TIPS_FOR_INFO"
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
                :items="WHAT_TO_INCLUDE"
            ></InfoBox>
        </div>
        <CardFooter
            firstBtnText="Back to Resume"
            secondBtnText="Continue"
        ></CardFooter>
    </div>
</template>

<script lang="ts">
import InfoBox from '@/components/shared/InfoBox.vue'
import CardHeader from '@/components/shared/CardHeader.vue'
import CardFooter from '@/components/shared/CardFooter.vue'
import { TIPS_FOR_INFO, WHAT_TO_INCLUDE } from '@/lib/constants.js'

export default {
    name: 'AdditionalInformationCard',

    components: {
        InfoBox,
        CardHeader,
        CardFooter,
    },

    data() {
        return {
            TIPS_FOR_INFO,
            WHAT_TO_INCLUDE,
            additionalInfoText: '',
        }
    },
    computed: {
        characterCount() {
            return this.additionalInfoText.length
        },
    },
}
</script>

<style scoped></style>
