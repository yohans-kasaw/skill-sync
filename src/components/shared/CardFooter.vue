<template>
    <div
        class="px-6 py-4 border-t border-gray-700 flex justify-between"
    >
        <div>
            <button
                v-if="firstBtnText"
                class="btn-primary"
            >
                {{ firstBtnText }}
            </button>
        </div>
        <button
            v-if="secondBtnText"
            class="btn-primary"
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
