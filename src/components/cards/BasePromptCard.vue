<template>
    <div class="card-container">
        <CardHeader
            title="Base Prompt"
            subtitle="Define a persona or guiding principles for generating your application documents."
            icon="mdi-chat-outline"
            colorClass="bg-green-500/20 text-green-400"
        >
        </CardHeader>

        <div class="px-6 bg-gray-dark pb-6 space-y-6">
            <InfoBox
                title="Tips for your base prompt"
                :bulb="true"
                :items="TIPS_FOR_BASE_PROMPT"
            ></InfoBox>

            <div>
                <textarea
                    id="basePrompt"
                    v-model="basePromptText"
                    rows="5"
                    class="text-area interactive-border"
                    :placeholder="BASE_PROMPT_PLACEHOLDER"
                ></textarea>
            </div>

            <div class="space-y-3">
                <h3 class="font-semibold text-sm">Prompt Suggestions</h3>
                <div class="space-y-2">
                    <div
                        v-for="(suggestion, index) in PROMPT_SUGGESTIONS"
                        :key="index"
                        @click="applySuggestion(suggestion)"
                        class="p-3 border border-gray-mid rounded-lg text-xs bg-secondary hover:bg-gray-light/30"
                    >
                        {{ suggestion }}
                    </div>
                </div>
            </div>
        </div>
        <CardFooter firstBtnText="Back to Additional Info"></CardFooter>
    </div>
</template>

<script>
import InfoBox from '@/components/shared/InfoBox.vue'
import CardHeader from '@/components/shared/CardHeader.vue'
import CardFooter from '@/components/shared/CardFooter.vue'
import { useUserInfoStore } from '@/lib/store.js'
import {
    BASE_PROMPT_PLACEHOLDER,
    TIPS_FOR_BASE_PROMPT,
    PROMPT_SUGGESTIONS,
} from '@/lib/constants.js'

export default {
    name: 'BasePromptCard',
    components: {
        InfoBox,
        CardHeader,
        CardFooter,
    },
    data() {
        return {
            BASE_PROMPT_PLACEHOLDER,
            TIPS_FOR_BASE_PROMPT,
            PROMPT_SUGGESTIONS,
        }
    },
    computed: {
        basePromptText: {
            get() {
                return useUserInfoStore().basePrompt
            },
            set(value) {
                useUserInfoStore().basePrompt = value
            },
        },
    },
    methods: {
        applySuggestion(suggestion) {
            this.basePromptText = suggestion
        },
    },
}
</script>

<style scoped></style>
