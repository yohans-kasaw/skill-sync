<template>
  <BaseCard
    title="Resume (JSON Format)"
    subtitle="Paste your JSON resume, or upload it as file."
    icon-name="mdi-code-json" <!-- Replaced SVG with v-icon -->
    icon-accent="blue"      <!-- Using standard blue accent -->
    footer-alignment="end"
  >
    <InfoBox
      title="Why JSON?"
      icon-name="mdi-help-circle-outline"
    >
      <ul>
        <li v-for="(item, index) in why_json" :key="index">
          <span>{{ item }}</span>
        </li>
      </ul>
    </InfoBox>

    <!-- JSON input part -->
    <div class="flex flex-col gap-3">
      <div class="w-full bg-gray-700/80 rounded-sm p-[4px] flex">
        <button
          v-for="tab in ['paste', 'upload']"
          :key="tab"
          @click="activeTab = tab"
          :class="[
            'flex-1 px-4 py-[4px] text-xs font-medium rounded-sm',
            activeTab === tab ? 'bg-gray-900 text-white' : 'text-gray-400 hover:text-gray-200'
          ]"
        >
          {{ tab === 'paste' ? 'Paste JSON' : 'Upload File' }}
        </button>
      </div>

      <div class="border rounded-lg border-gray-700 hover:border-blue-500/60 text-gray-400">
        <textarea
          v-if="activeTab == 'paste'"
          v-model="jsonText"
          rows="15"
          class="w-full p-3 font-mono outline-none bg-transparent text-gray-300 placeholder-gray-500"
          placeholder='{ "basics": {"name": "Jane Smith", "email": "jane@example.com"}, "summary": "Software Engineer..."}'
        ></textarea>
        <div v-else class="flex flex-col gap-3 justify-center items-center w-full h-60 p-4">
          <v-icon size="48" class="text-gray-500">mdi-cloud-upload-outline</v-icon>
          <span class="text-white font-medium text-sm">Upload JSON Resume</span>
          <span class="text-gray-400 text-xs text-center">Drag and drop your JSON file here or click to browse</span>
          <button class="mt-2 text-white px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-xs">
            Select File
          </button>
        </div>
      </div>

      <div class="w-full flex justify-end" v-if="activeTab == 'paste'">
        <button
          @click="formatJson"
          class="bg-slate-700 hover:bg-slate-600 px-3 py-1.5 border border-slate-600 rounded-md text-xs text-white flex items-center gap-1"
          :disabled="!jsonText.trim()"
        >
          <v-icon size="16">mdi-code-braces</v-icon>
          Format JSON
        </button>
      </div>
    </div>

    <!-- Footer Slot -->
    <template #footerContent>
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
import { defineComponent, ref } from 'vue';
import BaseCard from '../shared/BaseCard.vue';
import InfoBox from '../shared/InfoBox.vue';

export default defineComponent({
  name: 'ResumeJsonCard',
  components: { BaseCard, InfoBox },
  setup() {
    const activeTab = ref('paste');
    const jsonText = ref('');
    const why_json = ref([
      'Make quick updates to your resume—no more messy formatting.',
      'Share effortlessly with AI tools and easy to prompt.',
      'Customize the look with HTML + JS then print from browser to get PDF.'
    ]);

    const formatJson = () => {
      try {
        const parsed = JSON.parse(jsonText.value);
        jsonText.value = JSON.stringify(parsed, null, 2);
      } catch (e) {
        // console.error("Invalid JSON:", e);
        // Optionally, provide user feedback about invalid JSON
        alert("Invalid JSON format. Could not format.");
      }
    };

    return {
      activeTab,
      jsonText,
      why_json,
      formatJson,
    };
  }
});
</script>

<style scoped>
textarea::placeholder { color: #6B7280; }
/* The bg-transparent on textarea helps it inherit the card's content area bg if needed,
   but since BaseCard's content area has bg-[#1E202B], this textarea will be on that.
   If you want the textarea itself to have a different bg (like #181926), add it back.
   For full unification, it might be better to make textareas also bg-[#1E202B] or transparent
   and rely on border for definition.
   Current example keeps its distinct textarea style from original for functionality.
*/
textarea {
  background-color: #181926; /* Keeping original textarea background for contrast */
}
</style>
