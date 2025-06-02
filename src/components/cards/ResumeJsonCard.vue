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
                    class="w-full bg-gray-mid/50 rounded-md p-1 flex items-center space-x-1"
                >
                    <button
                        v-for="tab in ['paste', 'upload']"
                        :key="tab"
                        @click="activeTab = tab"
                        :class="[
                            'flex-1 py-1.5 px-3 text-center text-xs font-medium rounded transition-colors duration-150',
                            activeTab === tab
                                ? 'bg-black'
                                : 'hover:bg-secondary/70',
                        ]"
                    >
                        {{ tab === 'paste' ? 'Paste JSON' : 'Upload File' }}
                    </button>
                </div>

                <div>
                    <JsonView
                        v-if="activeTab === 'paste'"
                        v-model="jsonText"
                    ></JsonView>
                    <div
                        v-else
                        class="text-area interactive-border center-item min-h-[27rem] gap-3"
                    >
                        <v-icon class="text-gray-light" style="font-size: 3rem"
                            >mdi-cloud-upload-outline</v-icon
                        >
                        <span class="font-medium text-sm pt-2"
                            >Upload JSON Resume</span
                        >
                        <span class="text-gray-light text-xs text-center">
                            Drag and drop your JSON file here or click to browse
                        </span>
                        <button class="btn-primary">Select File</button>
                    </div>
                </div>

                <div
                    class="w-full flex justify-end"
                    v-if="activeTab === 'paste'"
                >
                    <button
                        @click="formatJson"
                        class="btn-primary text-xs"
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
import { mapState } from 'pinia'
import { useUserInfoStore } from '@/lib/store.js'
import JsonView from '@/components/shared/JsonView.vue'
import { useUserSettingsStore } from '@/lib/store'

export default {
    name: 'JsonResumeCard',
    components: {
        InfoBox,
        CardHeader,
        CardFooter,
        JsonView,
    },
    data() {
        return {
            activeTab: 'paste',
            isFormatting: false,
            WHY_JSON,
        }
    },
    computed: {
        ...mapState(useUserSettingsStore, ['tabSize']),
        jsonText: {
            get() {
                return useUserInfoStore().resumeJson
            },
            set(value) {
                useUserInfoStore().resumeJson = value
            },
        },
    },
    methods: {
        formatJson() {
            if (!this.jsonText.trim()) return
            this.isFormatting = true
            try {
                const parsed = JSON.parse(this.jsonText)
                this.jsonText = JSON.stringify(parsed, null, this.tabSize)
            } catch (error) {
                alert('invalied json')
                console.error('Invalid JSON:', error)
            } finally {
                this.isFormatting = false
            }
        },
    },
}
</script>

<style scoped></style>
