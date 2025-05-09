<template>
    <div class="w-full bg-gray-800 shadow-lg rounded-lg border border-gray-700">
        <!-- Header -->
        <div class="p-6">
            <div class="flex gap-4 items-center">
                <div
                    class="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center shrink-0"
                >
                    <v-icon class="text-purple-400" size="20"
                        >mdi-account-outline</v-icon
                    >
                </div>
                <div>
                    <h1 class="text-white font-bold text-xl">
                        Additional Information
                    </h1>
                    <p class="text-gray-400 text-sm pt-1">
                        Provide any additional context or notes about your
                        application
                    </p>
                </div>
            </div>
        </div>

        <!-- Main Content Area -->
        <div class="px-6 bg-gray-800 pb-6 space-y-6">
            <InfoBox
                title="Tips for additional information?"
                :bulb="true"
                :items="tipsForInfo"
            ></InfoBox>

            <!-- Text Area for Additional Information -->
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

            <!-- What to include here -->
            <InfoBox
                title="What to include here:"
                :bulb="false"
                :items="whatToInclude"
            ></InfoBox>

        </div>

        <!-- Footer Buttons -->
        <div
            class="px-6 py-4 border-t border-gray-700 flex justify-between items-center rounded-b-lg"
        >
            <button
                class="px-5 py-2.5 border border-gray-700 text-white hover:bg-gray-600 text-sm font-medium rounded-md transition-colors duration-150"
            >
                Back to Resume
            </button>
            <button
                class="hover:bg-gray-600 text-white px-4 py-[8px] border border-gray-700 rounded-lg text-sm font-medium"
            >
                Continue
                <v-icon style="font-size: 1.1rem">mdi-arrow-down</v-icon>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import InfoBox from '@/components/shared/InfoBox.vue'

export default defineComponent({
    name: 'AdditionalInformationCard',

    components: {
        InfoBox
    },

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

        const characterCount = computed(() => {
            return additionalInfoText.value.length
        })

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
/* Tailwind CSS utility classes handle most styling.
   Custom styles can be added here if necessary. */

/* Ensure Vuetify icons are vertically aligned well if there are issues. */
/* .v-icon {
  vertical-align: middle; 
} */
</style>
