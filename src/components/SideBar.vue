<template>
    <nav
        class="fixed h-full w-12 hover:w-48 bg-gradient-to-br from-slate-900 to-slate-800 transition-all duration-300 ease-in-out"
    >
        <div class="py-8">
            <a
                v-for="(item, index) in menuItems"
                :key="index"
                @click="handleItemClick(item)"
                class="p-4 flex justify-start items-center cursor-pointer transition-colors duration-300 hover:bg-gray-700"
                :class="[
                    { 'bg-slate-800': $route.fullPath == item.path },
                    item.class
                ]"
            >
                <v-icon> {{ item.icon }}</v-icon>
                <span class="pl-3 truncate">{{ item.name }}</span>
            </a>
        </div>
    </nav>
</template>

<script>
import route_info from '../lib/route_info.js'

export default {
    name: 'Sidebar',
    data() {
        return {
            isExpanded: false,
            menuItems: route_info
        }
    },
    methods: {
        handleItemClick(item) {
            this.$router.push(item.path)
        }
    }
}
</script>

<style scoped></style>
