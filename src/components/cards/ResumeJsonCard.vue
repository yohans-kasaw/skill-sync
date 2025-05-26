<template>
    <div class="card-container">
        <CardHeader
            title="Resume (JSON Format)"
            subtitle="Paste your JSON resume, or upload it as a file."
            icon="mdi-code-json"
            colorClass="bg-blue-500/20 text-blue-400"
        />

        <div class="px-6 pb-6 space-y-6">
            <InfoBox title="Why JSON?" :bulb="true" :items="WHY_JSON"></InfoBox>

            <div class="space-y-4">
                <div
                    class="w-full bg-gray-700 rounded-md p-1 flex items-center space-x-1"
                >
                    <button
                        v-for="tab in ['paste', 'upload']"
                        :key="tab"
                        @click="activeTab = tab"
                        :class="[
                            'flex-1 py-1.5 px-3 text-center text-xs font-medium rounded transition-colors duration-150 text-white',
                            activeTab === tab
                                ? 'bg-gray-900'
                                : 'hover:bg-slate-600',
                        ]"
                    >
                        {{ tab === 'paste' ? 'Paste JSON' : 'Upload File' }}
                    </button>
                </div>

                <div>
                    <textarea
                        v-if="activeTab === 'paste'"
                        v-model="jsonText"
                        rows="15"
                        class="text-area interactive-border font-mono"
                        placeholder='{ "name": "Jane Smith", "email": "jane@example.com", "summary": "Software Engineer skilled in Python." }'
                    ></textarea>
                    <div
                        v-else
                        class="text-area interactive-border center-item min-h-[27rem]"
                    >
                        <v-icon class="text-gray-500" style="font-size: 3rem"
                            >mdi-cloud-upload-outline</v-icon
                        >
                        <span class="text-white font-medium text-sm pt-2"
                            >Upload JSON Resume</span
                        >
                        <span class="text-gray-400 text-xs text-center">
                            Drag and drop your JSON file here or click to browse
                        </span>
                        <button class="mt-3 btn-secondary">Select File</button>
                    </div>
                </div>

                <div
                    class="w-full flex justify-end"
                    v-if="activeTab === 'paste'"
                >
                    <button
                        @click="formatJson"
                        class="btn-secondary"
                        :disabled="!jsonText.trim() || isFormatting"
                    >
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
        <CardFooter secondBtnText="Continue"></CardFooter>
    </div>
</template>

<script>
import CardHeader from '@/components/shared/CardHeader.vue'
import InfoBox from '@/components/shared/InfoBox.vue'
import CardFooter from '@/components/shared/CardFooter.vue'
import { WHY_JSON } from '@/lib/constants.js'

export default {
    name: 'JsonResumeCard',
    components: {
        InfoBox,
        CardHeader,
        CardFooter,
    },
    data() {
        return {
            activeTab: 'paste',
            jsonText: '',
            isFormatting: false,
            WHY_JSON,
        }
    },
    methods: {
        formatJson() {
            if (!jsonText.value.trim()) return
            isFormatting.value = true
            try {
                const parsed = JSON.parse(jsonText.value)
                jsonText.value = JSON.stringify(parsed, null, 2)
            } catch (error) {
                console.error('Invalid JSON:', error)
            } finally {
                isFormatting.value = false
            }
        },
    },
}
</script>

<style scoped></style>
