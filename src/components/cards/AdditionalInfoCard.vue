<template>
    <BaseCard
        title="Additional Information"
        subtitle="Provide any additional context or notes about your application"
        icon-name="mdi-account-outline"
        icon-accent="purple"
        footer-alignment="between"
    >
        <!-- Main Content Slot -->
        <InfoBox
            title="Tips for additional information"
            icon-name="mdi-lightbulb-outline"
        >
            <ul>
                <li v-for="(tip, index) in tipsForInfo" :key="index">
                    <span>{{ tip }}</span>
                </li>
            </ul>
        </InfoBox>

        <div class="space-y-2">
            <label
                for="additionalInformation"
                class="block text-sm font-medium text-gray-300 mb-1"
            >
                Share any additional information that might be relevant to your
                application...
            </label>
            <textarea
                id="additionalInformation"
                v-model="additionalInfoText"
                rows="8"
                class="w-full p-3 bg-[#181926] border border-gray-600 hover:border-gray-500 focus:border-blue-500 rounded-lg text-gray-300 placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500 resize-y"
                placeholder="Enter your notes here..."
            ></textarea>
            <div class="text-right text-xs text-gray-500">
                {{ characterCount }} characters
            </div>
        </div>

        <InfoBox
            title="What to include here:"
            icon-name="mdi-help-circle-outline"
        >
            <!-- Changed icon for variety, kept style -->
            <ul>
                <li v-for="(item, index) in whatToInclude" :key="index">
                    <span>{{ item }}</span>
                </li>
            </ul>
        </InfoBox>

        <!-- Footer Slot -->
        <template #footerContent>
            <button
                class="px-5 py-2.5 bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium rounded-md transition-colors duration-150"
            >
                Back to Resume
            </button>
            <button
                class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-medium rounded-md flex items-center gap-1.5 transition-colors duration-150"
            >
                Continue
                <v-icon style="font-size: 1.1rem">mdi-arrow-down</v-icon>
            </button>
        </template>
    </BaseCard>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import BaseCard from '../shared/BaseCard.vue'
import InfoBox from '../shared/InfoBox.vue'

export default defineComponent({
    name: 'AdditionalInformationCard',
    components: { BaseCard, InfoBox },
    setup() {
        const additionalInfoText = ref('')
        const tipsForInfo = ref([
            'Highlight achievements not visible in your structured resume',
            'Mention specific interests in the company or role',
            'Keep it concise but informative'
        ])
        const whatToInclude = ref([
            'Specific interest in the role or company',
            'Relevant achievements not covered in your resume',
            'Explanation of any gaps in employment',
            'Links to portfolios, projects, or social media profiles'
        ])
        const characterCount = computed(() => additionalInfoText.value.length)

        return {
            additionalInfoText,
            tipsForInfo,
            whatToInclude,
            characterCount
        }
    }
})
</script>

<style scoped>
textarea::placeholder {
    color: #6b7280;
}
/* If using the ::v-slotted approach in InfoBox, the specific li styling here is not needed */
/* Otherwise, if InfoBox slot is plain, add bullet styles here if desired for *this card's lists* */
</style>
