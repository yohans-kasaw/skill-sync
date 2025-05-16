<template>
    <div class="p-6">
        <div class="flex gap-4 items-center">
            <div
                class="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                :class="[colorClass]"
            >
                <v-icon size="20">{{ icon }}</v-icon>
            </div>
            <div>
                <h1 class="text-white font-bold text-xl">{{ title }}</h1>
                <p class="text-gray-400 text-sm pt-1">{{ subtitle }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String,
        icon: String,
        colorClass: String,
    },
    computed: {
        iconBgClass() {
            return `bg-${this.colorClass}/20`
        },
        iconTextClass() {
            return `text-${this.colorClass}`
        },
    },
}
</script>
