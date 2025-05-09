<template>
    <BaseCard
        title="Base Prompt"
        subtitle="Define a persona or guiding principles for generating your application documents."
        icon-name="mdi-chat-outline"
        icon-accent="green"
        footer-alignment="start"
    >
        <!-- Main Content Slot -->
        <InfoBox
            title="Tips for your base prompt"
            icon-name="mdi-lightbulb-outline"
        >
            <ul>
                <li v-for="(tip, index) in tipsForBasePrompt" :key="index">
                    <span>{{ tip }}</span>
                </li>
            </ul>
        </InfoBox>

        <div>
            <textarea
                id="basePrompt"
                v-model="basePromptText"
                rows="5"
                class="w-full p-3 bg-[#181926] border border-gray-600 hover:border-gray-500 focus:border-blue-500 rounded-lg text-gray-300 placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500 resize-y"
                :placeholder="basePromptPlaceholder"
            ></textarea>
        </div>

        <div class="space-y-3">
            <h3 class="text-white font-semibold text-sm">Prompt Suggestions</h3>
            <div class="space-y-2">
                <button
                    v-for="(suggestion, index) in promptSuggestions"
                    :key="index"
                    @click="applySuggestion(suggestion)"
                    class="w-full text-left p-3 bg-[#292B3A] border border-[#383B4C] hover:border-blue-500 rounded-lg text-gray-300 text-xs hover:bg-[#313442] transition-colors duration-150 truncate"
                >
                    {{ suggestion }}
                </button>
            </div>
        </div>

        <InfoBox title="Prompt Guidance" icon-name="mdi-directions-fork">
            <p class="text-xs text-gray-400">
                <!-- Plain paragraph for this InfoBox -->
                Your base prompt provides the foundational instructions or
                persona for the AI. It helps shape the tone, style, and core
                message of your generated resume and cover letter. Be specific
                to guide the AI effectively.
            </p>
        </InfoBox>

        <!-- Footer Slot -->
        <template #footerContent>
            <button
                class="px-5 py-2.5 bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium rounded-md transition-colors duration-150"
            >
                Back to Additional Info
            </button>
        </template>
    </BaseCard>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BaseCard from '../shared/BaseCard.vue'
import InfoBox from '../shared/InfoBox.vue'

export default defineComponent({
    name: 'BasePromptCard',
    components: { BaseCard, InfoBox },
    setup() {
        const basePromptText = ref('')
        const basePromptPlaceholder = ref(/* ... placeholder ... */)
        const tipsForBasePrompt = ref([
            /* ... tips ... */
        ])
        const promptSuggestions = ref([
            /* ... suggestions ... */
        ])
        const applySuggestion = (suggestion: string) => {
            basePromptText.value = suggestion
        }
        return {
            basePromptText,
            basePromptPlaceholder,
            tipsForBasePrompt,
            promptSuggestions,
            applySuggestion
        }
    }
})
</script>

<style scoped>
textarea::placeholder {
    color: #6b7280;
}
.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
