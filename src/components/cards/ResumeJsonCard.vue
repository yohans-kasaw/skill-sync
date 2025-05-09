<template>
    <div class="w-full bg-gray-800 shadow-lg rounded-lg border border-gray-700">
        <!-- Header -->
        <CardHeader
            title="Resume (JSON Format)"
            subtitle="Paste your JSON resume, or upload it as a file."
            icon="mdi-code-json"
            colorClass="bg-blue-500/20 text-blue-400"
        />

        <!-- Main Content Area -->
        <div class="px-6 bg-gray-800 pb-6 space-y-6">
            <InfoBox title="Why JSON?" :bulb="true" :items="why_json"></InfoBox>

            <!-- JSON Input Part -->
            <div class="space-y-4">
                <!-- Tab Buttons Container -->
                <div
                    class="w-full bg-gray-700/80 rounded-md p-1 flex items-center space-x-1"
                >
                    <button
                        v-for="tab in ['paste', 'upload']"
                        :key="tab"
                        @click="activeTab = tab"
                        :class="[
                            'flex-1 py-1.5 px-3 text-center text-xs font-medium rounded transition-colors duration-150',
                            activeTab === tab
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-slate-600 hover:text-white'
                        ]"
                    >
                        {{ tab === 'paste' ? 'Paste JSON' : 'Upload File' }}
                    </button>
                </div>

                <!-- Text Area / Upload Area Container -->
                <div
                    class="rounded-lg border border-gray-700 hover:border-blue-500/30 focus-within:border-blue-500/30 focus-within:ring-1 focus-within:ring-blue-500 overflow-hidden transition-colors duration-150"
                >
                    <textarea
                        v-if="activeTab === 'paste'"
                        v-model="jsonText"
                        rows="15"
                        class="w-full p-3 bg-gray-900 text-gray-300 placeholder-gray-500 font-mono outline-none border-0 resize-y"
                        placeholder='{ "name": "Jane Smith", "email": "jane@example.com", "summary": "Software Engineer skilled in Python." }'
                    ></textarea>
                    <div
                        v-else
                        class="flex flex-col gap-3 justify-center items-center w-full min-h-[27rem] bg-gray-900 p-4"
                    >
                        <!-- Replaced Upload SVG with mdi-cloud-upload-outline -->
                        <v-icon class="text-gray-500" style="font-size: 3rem"
                            >mdi-cloud-upload-outline</v-icon
                        >
                        <span class="text-white font-medium text-sm pt-2"
                            >Upload JSON Resume</span
                        >
                        <span class="text-gray-400 text-xs text-center">
                            Drag and drop your JSON file here or click to browse
                        </span>
                        <button
                            class="mt-3 text-white px-4 py-2 bg-gray-700/80 hover:bg-gray-700 rounded-md text-xs font-medium transition-colors duration-150"
                        >
                            Select File
                        </button>
                    </div>
                </div>

                <!-- Format JSON Button -->
                <div
                    class="w-full flex justify-end"
                    v-if="activeTab === 'paste'"
                >
                    <button
                        @click="formatJson"
                        class="px-3 py-1.5 bg-slate-600 hover:bg-slate-500 text-white text-xs font-medium rounded-md border border-slate-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
                        :disabled="!jsonText.trim() || isFormatting"
                    >
                        <!-- Replaced Brace SVG with mdi-code-braces -->
                        <v-icon
                            class="inline mr-1 -ml-0.5 align-[-3px]"
                            style="font-size: 0.875rem"
                            >mdi-code-braces</v-icon
                        >
                        Format JSON
                    </button>
                </div>
            </div>
        </div>

        <!-- Footer Button -->
        <div
            class="px-6 py-4 bg-slate-800 border-t border-gray-700 flex justify-end items-center rounded-b-lg"
        >
            <button
                class="hover:bg-gray-600 text-white px-4 py-2 border border-gray-700 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors duration-150"
            >
                Continue
                <v-icon style="font-size: 1.1rem">mdi-arrow-down</v-icon>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CardHeader from '@/components/shared/CardHeader.vue'
import InfoBox from '@/components/shared/InfoBox.vue'

export default defineComponent({
    name: 'JsonResumeCard',
    components: {
        InfoBox,
        CardHeader
    },
    setup() {
        const activeTab = ref('paste')
        const jsonText = ref('')
        const isFormatting = ref(false)

        const why_json = ref([
            'Make quick updates to your resume—no more messy formatting.',
            'Share effortlessly with AI tools and easy to prompt.',
            'Customize the look with HTML + JS then print it from browser to get PDF.'
        ])

        const formatJson = () => {
            if (!jsonText.value.trim()) return
            isFormatting.value = true
            try {
                const parsed = JSON.parse(jsonText.value)
                jsonText.value = JSON.stringify(parsed, null, 2)
            } catch (error) {
                console.error('Invalid JSON:', error)
                // Optionally, show an error message to the user
            } finally {
                isFormatting.value = false
            }
        }

        return {
            activeTab,
            jsonText,
            isFormatting,
            why_json,
            formatJson
        }
    }
})
</script>

<style scoped></style>
