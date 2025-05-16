<template>
    <div
        class="px-6 py-4 border-t border-gray-700 flex justify-between items-center rounded-b-lg"
    >
        <div>
            <button
                v-if="firstBtnText"
                class="px-5 py-2.5 border border-gray-700 text-white hover:bg-gray-600 text-sm font-medium rounded-md transition-colors duration-150"
            >
                {{ firstBtnText }}
            </button>
        </div>
        <button
            v-if="secondBtnText"
            class="hover:bg-gray-600 text-white px-4 py-[8px] border border-gray-700 rounded-lg text-sm font-medium"
        >
            {{ secondBtnText }}
            <v-icon style="font-size: 1.1rem">mdi-arrow-down</v-icon>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        firstBtnText: String,
        secondBtnText: String,
    },
}
</script>

<style></style>
