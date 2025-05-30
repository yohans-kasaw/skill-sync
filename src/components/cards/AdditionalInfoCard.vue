<template>
    <div class="card-container">
        <CardHeader
            title="Additional Information"
            subtitle="Provide any additional context or notes about your application"
            icon="mdi-account-outline"
            colorClass="bg-purple-500/20 text-purple-400"
        />

        <InfoBox
            title="Tips for additional information?"
            :bulb="true"
            :items="TIPS_FOR_INFO"
        ></InfoBox>

        <div class="space-y-3">
            <label
                for="additionalInformation"
                class="block text-sm font-medium text-gray-light"
            >
                Share any additional information that might be relevant to your
                application...
            </label>
            <textarea
                id="additionalInformation"
                v-model="additionalInfoText"
                rows="8"
                class="text-area interactive-border"
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
        <CardFooter
            firstBtnText="Back to Resume"
            secondBtnText="Continue"
        ></CardFooter>
    </div>
</template>

<script>
import InfoBox from '@/components/shared/InfoBox.vue'
import CardHeader from '@/components/shared/CardHeader.vue'
import CardFooter from '@/components/shared/CardFooter.vue'
import { TIPS_FOR_INFO, WHAT_TO_INCLUDE } from '@/lib/constants.js'
import { useUserInfoStore } from '@/lib/store.js'

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
        }
    },
    computed: {
        additionalInfoText: {
            get() {
                return useUserInfoStore().additionalInfo
            },
            set(value) {
                useUserInfoStore().additionalInfo = value
            },
        },
        characterCount() {
            return this.additionalInfoText.length
        },
    },
}
</script>

<style scoped></style>
