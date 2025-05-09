<template>
  <div class="w-full bg-gray-800 shadow-lg rounded-lg border border-gray-700">
    <!-- Header -->
    <div class="p-6">
      <div class="flex gap-4 items-center">
        <div class="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center shrink-0">
          <v-icon class="text-green-400" size="20">mdi-chat-outline</v-icon>
        </div>
        <div>
          <h1 class="text-white font-bold text-xl">Base Prompt</h1>
          <p class="text-gray-400 text-sm pt-1">
            Define a persona or guiding principles for generating your application documents.
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="px-6 bg-gray-800 pb-6 space-y-6">
      <!-- Tips for your base prompt -->
      <div class="bg-slate-800 border border-gray-700 rounded-lg p-4">
        <div class="flex gap-3">
          <div class="text-yellow-500 pt-0.5 shrink-0">
            <v-icon size="20">mdi-lightbulb-outline</v-icon>
          </div>
          <div class="flex flex-col">
            <h3 class="text-white font-semibold text-sm mb-1">Tips for your base prompt</h3>
            <ul class="text-xs text-gray-400 space-y-1.5">
              <li v-for="(tip, index) in tipsForBasePrompt" :key="index" class="flex items-start gap-1.5">
                <span class="text-yellow-500 leading-tight">•</span>
                <span>{{ tip }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Text Area for Base Prompt -->
      <div>
        <textarea
          id="basePrompt"
          v-model="basePromptText"
          rows="5"
          class="w-full p-3 bg-gray-900 border border-gray-600 hover:border-gray-500 focus:border-blue-500 rounded-lg text-gray-300 placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500 resize-y"
          :placeholder="basePromptPlaceholder"
        ></textarea>
      </div>

      <!-- Prompt Suggestions -->
      <div class="space-y-3">
        <h3 class="text-white font-semibold text-sm">Prompt Suggestions</h3>
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

      <!-- Prompt Guidance -->
      <div class="bg-slate-800 border border-gray-700 rounded-lg p-4">
        <div class="flex gap-3 items-start">
          <div class="text-blue-400 pt-0.5 shrink-0">
            <v-icon size="20">mdi-directions-fork</v-icon> <!-- Or mdi-compass-outline -->
          </div>
          <div class="flex flex-col">
            <h3 class="text-white font-semibold text-sm mb-1">Prompt Guidance</h3>
            <p class="text-xs text-gray-400">
              Your base prompt provides the foundational instructions or persona for the AI. It helps shape the tone, style, and core message of your generated resume and cover letter. Be specific to guide the AI effectively.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Button -->
    <div class="px-6 py-4 bg-slate-800 border-t border-gray-700 flex justify-start items-center rounded-b-lg">
      <button
        class="px-5 border border-gray-700  hover:bg-gray-600 text-white py-2.5 text-sm font-medium rounded-md transition-colors duration-150"
      >
        Back to Additional Info
      </button>
      <!-- No "Continue" button in this screenshot -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// Ensure Vuetify is installed and configured for v-icon to work,
// or replace v-icon with SVG components if preferred.

export default defineComponent({
  name: 'BasePromptCard',
  setup() {
    const basePromptText = ref('');
    const basePromptPlaceholder = ref(
      `e.g., "Act as a career branding expert. Craft a compelling narrative for a Software Engineer targeting innovative tech companies. Emphasize problem-solving and collaboration with a professional yet approachable tone."`
    );

    const tipsForBasePrompt = ref([
      'Specify the desired tone (e.g., formal, enthusiastic, confident).',
      'Mention key skills or themes you want consistently highlighted.',
      `Define a persona, like 'a seasoned innovator' or 'a detail-oriented analyst'.`,
    ]);

    const promptSuggestions = ref([
      "Generate documents with a confident and assertive tone, focusing on leadership and strategic achievements.",
      "Adopt the persona of an enthusiastic innovator, highlighting creativity and problem-solving skills for a startup environment.",
      "Craft a narrative for a seasoned professional, emphasizing deep industry expertise and a track record of success in corporate settings.",
      "Write with a clear, concise, and action-oriented style, perfect for a technical role where precision is key.",
    ]);

    const applySuggestion = (suggestion: string) => {
      basePromptText.value = suggestion;
    };

    return {
      basePromptText,
      basePromptPlaceholder,
      tipsForBasePrompt,
      promptSuggestions,
      applySuggestion,
    };
  },
});
</script>

<style scoped>
</style>
