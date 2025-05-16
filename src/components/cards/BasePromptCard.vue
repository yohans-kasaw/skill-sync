<template>
    <div class="w-full bg-gray-800 shadow-lg rounded-lg border border-gray-700">
        <CardHeader
            title="Base Prompt"
            subtitle="Define a persona or guiding principles for generating your application documents."
            icon="mdi-chat-outline"
            colorClass="bg-green-500/20 text-green-400"
        >
        </CardHeader>

        <div class="px-6 bg-gray-800 pb-6 space-y-6">
            <InfoBox
                title="Tips for your base prompt"
                :bulb="true"
                :items="tipsForBasePrompt"
            ></InfoBox>

            <div>
                <textarea
                    id="basePrompt"
                    v-model="basePromptText"
                    rows="5"
                    class="w-full p-3 bg-gray-900 border border-gray-600 hover:border-gray-500 focus:border-blue-500 rounded-lg text-gray-300 placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500 resize-y"
                    :placeholder="basePromptPlaceholder"
                ></textarea>
            </div>

            <div class="space-y-3">
                <h3 class="text-white font-semibold text-sm">
                    Prompt Suggestions
                </h3>
                <div class="space-y-2">
                    <button
                        v-for="(suggestion, index) in promptSuggestions"
                        :key="index"
                        @click="applySuggestion(suggestion)"
                        class="w-full text-left p-3 bg-slate-800 border border-gray-700 hover:border-blue-500 rounded-lg text-gray-300 text-xs hover:bg-slate-700 transition-colors duration-150 truncate"
                    >
                        {{ suggestion }}
                    </button>
                </div>
            </div>
        </div>
        <CardFooter firstBtnText="Back to Additional Info"></CardFooter>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import InfoBox from '@/components/shared/InfoBox.vue'
import CardHeader from '@/components/shared/CardHeader.vue'
import CardFooter from '@/components/shared/CardFooter.vue'

export defau/lt defineComponent({
    name: 'BasePromptCard',
    components: {
        InfoBox,
        CardHeader,
        CardFooter
    },
    setup() {
        const basePromptText = ref('')
        const basePromptPlaceholder = ref(
            `e.g., "Act as a career branding expert. Craft a compelling narrative for a Software Engineer targeting innovative tech companies. Emphasize problem-solving and collaboration with a professional yet approachable tone."`
        )

        const tipsForBasePrompt = ref([
            'Specify the desired tone (e.g., formal, enthusiastic, confident).',
            'Mention key skills or themes you want consistently highlighted.',
            `Define a persona, like 'a seasoned innovator' or 'a detail-oriented analyst'.`
        ])

        const promptSuggestions = ref([
            'Generate documents with a confident and assertive tone, focusing on leadership and strategic achievements.',
            'Adopt the persona of an enthusiastic innovator, highlighting creativity and problem-solving skills for a startup environment.',
            'Craft a narrative for a seasoned professional, emphasizing deep industry expertise and a track record of success in corporate settings.',
            'Write with a clear, concise, and action-oriented style, perfect for a technical role where precision is key.'
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

<style scoped></style>
