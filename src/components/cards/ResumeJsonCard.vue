<template>
    <div class="w-full bg-gray-800 shadow-lg rounded-lg border border-gray-700">
        <!-- Header -->
        <div class="p-6">
            <div class="flex gap-4 items-center">
                <div
                    class="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0"
                >
                    <JsonFile class="h-5 w-5 text-blue-400" />
                </div>
                <div>
                    <h1 class="text-white font-bold text-xl">Resume (JSON Format)</h1>
                    <p class="text-gray-400 text-sm pt-1">
                        Paste your JSON resume, or upload it as a file.
                    </p>
                </div>
            </div>
        </div>

        <!-- Main Content Area -->
        <div class="px-6 bg-gray-800 pb-6 space-y-6">
            <!-- Why JSON? Info Box -->
            <div class="bg-slate-800 border border-gray-700 rounded-lg p-4">
                <div class="flex gap-3">
                    <div class="text-yellow-500 pt-0.5 shrink-0">
                        <v-icon size="20">mdi-lightbulb-outline</v-icon>
                    </div>
                    <div class="flex flex-col">
                        <h3 class="text-white font-semibold text-sm mb-1">Why JSON?</h3>
                        <ul class="text-xs text-gray-400 space-y-1.5">
                            <li
                                v-for="(item, index) in why_json"
                                :key="index"
                                class="flex items-start gap-1.5"
                            >
                                <span class="text-yellow-500 leading-tight">•</span>
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- JSON Input Part -->
            <div class="space-y-4">
                <!-- Tab Buttons Container -->
                <div class="w-full bg-gray-700/80 rounded-md p-1 flex items-center space-x-1">
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
                <div class="rounded-lg border border-gray-700 hover:border-blue-500/30 focus-within:border-blue-500/30 focus-within:ring-1 focus-within:ring-blue-500 overflow-hidden transition-colors duration-150">
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
                        <Upload class="h-12 w-12 text-gray-500" />
                        <span class="text-white font-medium text-sm pt-2">Upload JSON Resume</span>
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
                        <Brace class="h-3.5 w-3.5 inline mr-1 -ml-0.5 align-[-3px]"></Brace>
                        Format JSON
                    </button>
                </div>
            </div>
        </div>

        <!-- Footer Button -->
        <div class="px-6 py-4 bg-slate-800 border-t border-gray-700 flex justify-end items-center rounded-b-lg">
            <button
                class="hover:bg-gray-600 text-white px-4 py-2 border border-gray-700 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors duration-150"
            >
                Continue
                <v-icon style="font-size: 1.1rem;">mdi-arrow-down</v-icon>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import JsonFile from '@/assets/svg/json-file.svg' // Ensure these paths are correct
import Upload from '@/assets/svg/upload.svg'
import Brace from '@/assets/svg/braces.svg'
// Ensure Vuetify is installed and configured for v-icon to work,
// or replace v-icon with SVG components if preferred.

export default defineComponent({
    name: 'JsonResumeCard',
    components: {
        JsonFile,
        Upload,
        Brace
    },
    setup() {
        const activeTab = ref('paste')
        const jsonText = ref('')
        const isFormatting = ref(false) // Example state for format button

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
                console.error("Invalid JSON:", error)
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

<style scoped>
/* Tailwind CSS utility classes handle most styling.
   Custom styles can be added here if necessary. */
</style>
