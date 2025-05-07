<template>
    <div
        class="w-2/4 border shadow-lg border-blue-900 hover:shadow-xl rounded-lg"
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

        <div class="bg-gray-900 p-4">
            <div
                class="bg-amber-900/20 border border-amber-800 rounded-lg p-3 flex gap-3"
            >
                <div class="text-amber-400">
                    <v-icon>mdi-lightbulb-outline</v-icon>
                </div>

                <div class="text-white text-xs flex gap-2 flex-col">
                    Why Json is great for resumes?
                    <ul class="text-xs text-gray-400 space-y-1 pl-3">
                        <li
                            v-for="(item, index) in why_json"
                            key="{i}"
                            className="flex items-start gap-1.5"
                        >
                            <span className="text-amber-600 dark:text-amber-400"
                                >•</span>

                            <span>{{item}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import JsonFile from '../assets/svg/json-file.svg'
export default {
    components: {
        JsonFile
    },
    data() {
        return {
            why_json: [
                'Make quick updates to your resume—no more messy formatting',
                'Share effortlessly with AI tools whenever you need',
                'Customize the look with HTML then print it to get pdf',
            ]
        }
    }
}
</script>

<style scoped></style>
