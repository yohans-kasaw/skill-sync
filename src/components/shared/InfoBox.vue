<template>
    <div class="bg-slate-800 border border-gray-700 rounded-lg p-4">
        <div class="flex gap-3">
            <div v-if="bulb" class="pt-0.5 shrink-0 text-yellow-500">
                <v-icon :size="20"> mdi-lightbulb-outline </v-icon>
            </div>
            <div class="flex flex-col">
                <h3 class="text-white font-semibold text-sm mb-1">
                    {{ title }}
                </h3>
                <ul class="text-xs text-gray-400 space-y-1.5">
                    <li
                        v-for="(item, index) in items"
                        :key="index"
                        class="flex items-start gap-1.5"
                    >
                        <span
                            class="leading-tight"
                            :class="{ 'text-yellow-500': bulb }"
                            >•</span
                        >
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        items: Array,
        bulb: Boolean,
    },
}
</script>
