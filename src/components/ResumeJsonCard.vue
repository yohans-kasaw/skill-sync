<template>
    <div
        class="w-fill border shadow-lg border-blue-900 hover:shadow-xl rounded-lg"
    >
        <div
            class="relative p-6 bg-gradient-to-r from-slate-800/20 to-blue-900/20 rounded-t-lg border-b"
        >
            <div
                class="absolute top-0 right-0 h-20 w-20 bg-blue-600/20 rounded-bl-full opacity-50"
            ></div>
            <div class="flex gap-2 items-center">
                <div
                    class="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center"
                >
                    <JsonFile class="h-5 w-5 text-blue-400" />
                </div>
                <span class="text-white font-bold text-xl"
                    >Resume (JSON Format)</span
                >
            </div>
            <div class="text-gray-400 text-xs pt-2">
                Paste your JSON resume, or upaload it as file.
            </div>
        </div>

        <div class="bg-gray-900 p-4 flex flex-col gap-7 pb-6">
            <div
                class="bg-amber-900/20 border border-amber-800 rounded-lg p-3 flex gap-3"
            >
                <div class="text-amber-400">
                    <v-icon>mdi-lightbulb-outline</v-icon>
                </div>

                <div class="text-white text-xs flex gap-2 flex-col">
                    Why Json?
                    <ul class="text-xs text-gray-400 space-y-1 pl-1">
                        <li
                            v-for="(item, index) in why_json"
                            :key="index"
                            class="flex items-start gap-1.5"
                        >
                            <span class="text-amber-400">•</span>

                            <span>{{ item }}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!--json input part -->
            <div class="flex flex-col gap-3">
                <div
                    class="w-full bg-gray-700/80 rounded-sm p-[4px] flex flex-col"
                >
                    <div class="flex">
                        <button
                            v-for="tab in ['paste', 'upload']"
                            :key="tab"
                            @click="activeTab = tab"
                            :class="[
                                'flex-1 px-4 py-[4px] text-xs font-medium rounded-sm',
                                activeTab === tab
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-400'
                            ]"
                        >
                            {{ tab === 'paste' ? 'Paste JSON' : 'Upload File' }}
                        </button>
                    </div>
                </div>

                <div
                    class="border rounded-lg border-gray-700 hover:border-blue-500/60 text-gray-400"
                >
                    <textarea
                        v-if="activeTab == 'paste'"
                        rows="15"
                        class="w-full p-3 font-mono outline-none"
                        placeholder='{ "address": {"name": "Jane Smith", "email": "jane@example.com"}, "summary": "Software Engineer skilled in Python."'
                    ></textarea>
                    <div
                        v-else
                        class="flex flex-col gap-3 justify-center items-center w-full h-60"
                    >
                        <div>
                            <Upload />
                        </div>

                        <div>
                            <Upload class="h-10 w-10 text-gray-400" />
                        </div>

                        <span class="text-white font-medium text-sm"
                            >Upload JSON Resume</span
                        >
                        <span class="text-gray-400 text-xs">
                            Drag and drop your JSON file here or click to browse
                        </span>
                        <button
                            class="text-white px-4 py-2 bg-gray-700/80 rounded-md text-xs"
                        >
                            Select File
                        </button>
                    </div>
                </div>

                <div
                    class="w-full flex justify-end"
                    v-if="activeTab == 'paste'"
                    :class="{
                        'text-gray-400': isDisabled,
                        'text-white': !isDisabled
                    }"
                >
                    <button
                        class="bg-gray-900 px-2 py-2 border border-gray-700 rounded-sm text-xs"
                        :disabled="isDisabled"
                    >
                        <Brace class="h-3 w-4 inline"></Brace>
                        Format JSON
                    </button>
                </div>
            </div>
        </div>

        <div class="w-fill flex justify-end bg-slate-900/30 px-3 py-4">
            <button
                class="bg-blue-500 px-4 py-[8px] border border-gray-700 rounded-lg text-sm font-medium"
            >
                Continue
                <v-icon class="" style="font-size: 1rem">
                    mdi-arrow-down</v-icon
                >
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import JsonFile from '../assets/svg/json-file.svg'
import Upload from '../assets/svg/upload.svg'
import Brace from '../assets/svg/braces.svg'
export default {
    components: {
        JsonFile,
        Upload,
        Brace
    },
    data() {
        return {
            activeTab: 'paste',
            isDisabled: false,
            why_json: [
                'Make quick updates to your resume—no more messy formatting',
                'Share effortlessly with AI tools and easy to propmt',
                'Customize the look with HTML + Js then print it form browser to get pdf'
            ]
        }
    }
}
</script>

<style scoped></style>
